import React, { Component } from "react";
import "./AddBoardPost.css";
import { Link } from "react-router-dom";

class AddBoardPost extends Component {
  state = {
    invalidForm: true,
    formData: {
      name: "",
      ingredients: "",
      directions: "",
    },
  };

  formRef = React.createRef();

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
      invalidForm: !this.formRef.current.checkValidity(),
    });
  };

  render() {
    return (
      <>
        <div className="addPostPage">
          <h1>Add Recipe</h1>

          <label htmlFor="recipe_name">
            <b>Recipe Name:</b>
          </label>
          <form className="" ref={this.formRef} onSubmit={this.handleSubmit}>
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
              <label htmlFor="ingredients">
                <b>Ingredients:</b>
              </label>
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
              <label htmlFor="directions">
                <b>Directions:</b>
              </label>
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
              className="btn btn-dark"
              style={{ backgroundColor: "rgb(46,84,101)" }}
              disabled={this.state.invalidForm}
            >
              Add Recipe
            </button>
          </form>
          <div>
            <Link
              className="btn spacing"
              style={{ backgroundColor: "#FF7F50" }}
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
