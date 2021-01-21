import React, { Component } from "react";
import "./Board.css";
import * as createRecipe from "../../services/boardService";
import { Link } from "react-router-dom";

// import RecipeBoard from "../../components/RecipeBoard/RecipeBoard";

class Board extends Component {
  state = {
    invalidFrom: true,
    createPost: [],
    formData: {
      name: "",
      directions: "",
      ingredients: "",
    },
    user: this.props.user,
  };

  async componentDidMount() {
    const recipePost = await createRecipe.createPost(this.props.user);
    this.setState({ createPost: recipePost.recipePost });
  }

  handleSubmit = (e) => {
    e.perventDefault();
    this.props.handleCreate(this.state.formData);
    // const data = this.setState;
    // console.log("data", data);
  };

  handleInputChange = (e) => {
    const formData = {
      ...this.state.formData,
      [e.target.name]: e.target.value,
    };
    this.setState({ formData: formData });
  };

  handleCreate = async (formData) => {
    const recipes = await createRecipe.createPost(formData);
    console.log(recipes);
    // this.props.history.push("/board");
    this.setState({ recipes, formData });
    // this.setState({ recipes: recipes, formData });
    this.props.history.push("/board");
  };

  render() {
    return (
      <>
        <div className="boardPage">
          <h1>Recipe Board</h1>
          <div className="boardPosts">
            {/* {map of board posts} */}
            <Link
              className="btn btn-info"
              style={{ backgroundColor: "rgb(46,84,101)" }}
              to={{ pathname: "/board/add" }}
            >
              Add Recipe
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default Board;
