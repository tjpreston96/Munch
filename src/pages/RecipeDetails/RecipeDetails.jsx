import React, { Component } from "react";
import "./RecipeDetails.css";

// this.setState({recipeDetails: this.props.location.state.recipes.recipe}) 
class RecipeDetails extends Component {
  state = {
    recipeDetails: [],
  };


  render() {
    return (
      <>
        <div className="detailsPage">
          <h2>Recipe Details</h2>
          {this.props.location.state.recipes.recipe.label}
        </div>
      </>
    );
  }
}

export default RecipeDetails;
