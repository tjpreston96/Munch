import React, { Component } from "react";
import "./Search.css";
import { getResultsFromBackend } from "../../services/recipe-api";
import { Link } from "react-router-dom";
import RecipeCard from "../../components/RecipeCard/RecipeCard";

class Search extends Component {
  state = {
    recipes: [],
    singleRecipe: [],
    formData: {
      query: "",
    },
  };

  handleSubmit = (e) => {
    // prevents automatic refresh before submit
    e.preventDefault();
    this.handleSearch(this.state.formData);
  };

  handleChange = (e) => {
    // setting formData query string to the input from user, then passed to handleSearch
    const formData = {
      ...this.state.formData,
      [e.target.name]: e.target.value,
    };
    this.setState({ formData: formData });
  };

  handleSearch = async (formData) => {
    console.log(`this function works!!!`);
    const recipes = await getResultsFromBackend(formData);

    this.props.history.push("/search");
    this.setState({ recipes, formData });
    console.log(recipes);
    console.log(`==========================`);
    this.setState({ recipes: recipes, formData });
    this.props.history.push("/search");
  };

  render() {
    return (
      <>
        <div className="searchPage">
          <h2>Find a Recipe</h2>
          <div>
            <form onSubmit={this.handleSubmit}>
              <input
                className="searchBar"
                type="text"
                name="query"
                placeholder="Search..."
                value={this.state.formData.query}
                onChange={this.handleChange}
              />
              <button type="submit"><i className="fa fa-search search-btn"></i></button>
            </form>
            <div className="results">
              {this.state.recipes.map((recipes) => (
                <Link
                  className="recipesDetails"
                  to={{
                    pathname: `/recipesDetails`,
                    state: { recipes },
                  }}
                >
                  <div className="resultsCard">
                    <div className="imgDiv">
                      <img
                        className="resultImg"
                        src={recipes.recipe.image}
                        alt="food-img"
                      />
                    </div>
                    <div className="resultInfo">
                      <h2>{recipes.recipe.label}</h2>
                    </div>
                  </div>
                </Link>
              ))}
              <RecipeCard singleRecipe={this.state.singleRecipe} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Search;
