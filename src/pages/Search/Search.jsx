import React, { Component } from "react";
import "./Search.css";

class Search extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="searchCard">
          <h2>Find a Recipe</h2>
          <div>
            <input type="text" />
            <button type="submit">Search</button>
          </div>
        </div>
      </>
    );
  }
}

export default Search;
