import React, { Component } from "react";
import "./Search.css";
import * as recipeAPI from "../../services/recipe-api";

class Search extends Component {
  state = {
    recipes: [],
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
    const recipes = await recipeAPI.recipeSearch(formData);
    console.log();
    this.setState({ recipes: recipes.hits });
  };

  render() {
    return (
      <>
        <div className="searchCard">
          <h2>Find a Recipe</h2>
          <div>
            <form onSubmit={this.handleSubmit}>
              <input
                className="searchBar"
                type="text"
                name="query"
                placeholder="What would you like to eat?"
                value={this.state.formData.query}
                onChange={this.handleChange}
              />
              <button type="submit">Search</button>
            </form>
            <div className="results"></div>
          </div>
        </div>
      </>
    );
  }
}

export default Search;
