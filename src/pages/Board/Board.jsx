import React, { Component } from "react";
import "./Board.css";
import RecipeBoard from "../../components/RecipeBoard/RecipeBoard";

class Board extends Component {
  state = {
    recipeBoard: [],
  };
  render() {
    return (
      <>
        <RecipeBoard />
      </>
    );
  }
}

export default Board;
