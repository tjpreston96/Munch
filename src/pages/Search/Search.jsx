import React, { Component } from "react";
import "./Search.css";
import { getResultsFromBackend } from "../../services/recipe-api";
import { Link } from "react-router-dom";

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
    const recipes = await getResultsFromBackend(formData);
    this.setState({ recipes, formData });
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
              <button type="button submit">
                <i className="fa fa-search search-btn"></i>
              </button>
            </form>
            <hr />
            <div className="results">
              {this.state.recipes.map((recipes, idx) => (
                <Link
                  className="recipesDetails"
                  key={idx}
                  to={{
                    pathname: `/recipesDetails`,
                    state: { recipes },
                  }}
                >
                  <div className="card">
                    <img
                      className="card-img-top"
                      src={`${recipes.recipe.image}`}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h4 className="card-title">{recipes.recipe.label}</h4>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Search;
