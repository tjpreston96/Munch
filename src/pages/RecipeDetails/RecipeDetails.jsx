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
    // console.log(Recipes.recipe.cautions)
    return (
      <div className="detailsPage">
        <h1>Recipe Details</h1>
        <div className="detailBackground ">
          <img src={Recipes.recipe.image} className="detailImg" alt="" />
          <hr />
          <h2>{Recipes.recipe.label}</h2>
        <h6>Total Yield: {Recipes.recipe.yield}</h6>
          <hr />
          <h4>Fast Facts:</h4>
          <h6>
            <b>Cautions:</b>
          </h6>
          {/* {Recipes.recipe.cautions} */}
          {Recipes.recipe.cautions.map((caution, idx) => (
            <p key={idx}>{caution}</p>
          ))}
          <h6>
            <b>Health Labels:</b>
          </h6>
          {Recipes.recipe.healthLabels.map((label, idx) => (
            <p key={idx}>{label}</p>
          ))}
          <h6>
            <b>Diet Labels:</b>
          </h6>
          {Recipes.recipe.dietLabels.map((label, idx) => (
            <p key={idx}>{label}</p>
          ))}
          <h6>
            <b>Calories:</b>
          </h6>
          {Math.floor(Recipes.recipe.calories)}
          <hr className="split" />
          <h4>Ingredients:</h4>
          {Recipes.recipe.ingredients.map((ingredient, idx) => (
            <p key={idx}>{ingredient.text}</p>
          ))}
          <hr className="split" />
          <h4>Nutrition Facts:</h4>
          {Recipes.recipe.digest.map((digest, idx) => (
            <div key={idx}>
              <p>
                {digest.label}: {Math.floor(digest.total)}
                {digest.unit}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default RecipeDetails;
