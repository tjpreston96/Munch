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
    const recipes = await recipeAPI.recipeSearch(formData)
  };

  render() {
    return (
      <>
        <div className="searchCard">
          <h2>Find a Recipe</h2>
          <div>
            <form>
              <input
                type="text"
                name="query"
                value={this.state.formData.query}
                onChange={this.handleChange}
              />
              <button type="submit">Search</button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Search;
