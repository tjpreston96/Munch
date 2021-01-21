import React, { Component } from "react";
import "./RecipeDetails.css";

// this.setState({recipeDetails: this.props.location.state.recipes.recipe})
class RecipeDetails extends Component {
  state = {
    recipeDetails: [],
  };

  render() {
    const Recipes = this.props.location.state.recipes;
    console.log(this.props.location.state.recipes);
    return (
      <div className="detailsPage">
        <h1>Recipe Details</h1>
        <div className="detailBackground ">
          <img src={Recipes.recipe.image} className="detailImg" alt="" />
          <hr />
          <h2>{Recipes.recipe.label}</h2>
          <hr />
          <h4>Fast Facts:</h4>
          {/* {Recipes.recipe.ingredients.map((ingredient, idx) => (
            <p key={idx}>{ingredient.text}</p>
          ))} */}
          <p>
            <b>Calories:</b> {Math.floor(Recipes.recipe.calories)}
          </p>
          <h4>Ingredients:</h4>
          {Recipes.recipe.ingredients.map((ingredient, idx) => (
            <p key={idx}>{ingredient.text}</p>
          ))}
        </div>
      </div>
    );
  }
}

export default RecipeDetails;
