import React, { Component } from "react";
import "./AddBoardPost.css";
import { Link } from "react-router-dom";

class AddBoardPost extends Component {
  state = {
    invalidFrom: true,
    formData: {
      name: "",
      ingredients: "",
      directions: "",
    },
  };

  fromRef = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    // handleAddRecipe function will render in App.jsx
    this.props.handleCreatePost(this.state.formData);
  };

  handleChange = (e) => {
    const formData = {
      ...this.state.formData,
      [e.target.name]: e.target.value,
    };
    this.setState({
      formData,
      invalidFrom: !this.fromRef.current.checkValidity(),
    });
  };

  render() {
    return (
      <>
        <button onClick={this.handleShowForm}>Add Recipe</button>
        <div className="addPostPage">
          <h1>Add Recipe</h1>

          <label htmlFor="recipe_name">Recipe Name:</label>
          <form className="" ref={this.fromRef} onSubmit={this.handleSubmit}>
            <input type="hidden" name="addedBy" value={this.props.user._id} />
            <div className="">
              <input
                type="text"
                name="name"
                id="recipe_name"
                className=""
                value={this.state.formData.name}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="">
              <label htmlFor="ingredients">Ingredients:</label>
              <br />
              <input
                type="text"
                name="ingredients"
                id="ingredients"
                className=""
                value={this.state.formData.ingredients}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="">
              <label htmlFor="directions">Directions:</label>
              <br />
              <input
                type="text"
                name="directions"
                id="directions"
                className=""
                value={this.state.formData.directions}
                onChange={this.handleChange}
                required
              />
            </div>
            <br />
            <button
              type="submit"
              className=""
              disabled={this.state.invalidFrom}
            >
              Add Recipe
            </button>
          </form>
          <div>
            <Link
              className="btn btn-info"
              style={{ backgroundColor: "rgb(46,84,101)" }}
              to={{ pathname: "/board" }}
            >
              Cancel
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default AddBoardPost;
