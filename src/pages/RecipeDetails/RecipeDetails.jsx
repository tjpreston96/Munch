import React, { Component } from "react";
import "./RecipeDetails.css";

class RecipeDetails extends Component {
  state = {
    recipeDetails: [],
  };

  // async componentDidMount() {
  //   const recipeDetails = await getRecipeDetails(this.props.match.recipe.label);
  //   this.setState({ recipeDetails });
  // }

  render() {
    return (
      <>
        <div className="detailsPage">
          <h2>Recipe Details</h2>
        </div>
      </>
    );
  }
}

export default RecipeDetails;
