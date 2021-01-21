import React, { Component } from "react";
import "./Board.css";
import * as createRecipe from "../../services/boardService";
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
        <div className="mb-3">
          <div className="container-sm">
            <h1 className="h1">Recipe Board</h1>
            <div>
              <br />
              <br />
              <form onSubmit={this.handleSubmit}>
                <label className="form-label" htmlFor="formControlInput1">
                  Recipe Name
                </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter Name..."
                  required
                  name="name"
                  value={this.state.formData.name}
                  onChange={this.handleInputChange}
                />
                <br />
                <label className="form-label" htmlFor="formControlInput1">
                  Recipe Ingredients
                </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter Ingredients..."
                  required
                  name="ingredients"
                  value={this.state.formData.ingredients}
                  onChange={this.handleInputChange}
                />
                <br />
                <label className="form-label" htmlFor="formControlInput1">
                  Recipe Directions
                </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter Directions..."
                  required
                  name="directions"
                  value={this.state.formData.directions}
                  onChange={this.handleInputChange}
                />
                <br />
                <button type="button" className="btn btn-outline-primary">
                  Create Post
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Board;
