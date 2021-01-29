import React, { Component } from "react";
import "./EditBoardPost.css";
import { Link } from "react-router-dom";
import * as postAPI from "../../services/postService";
import { withRouter } from "react-router";
class EditBoardPost extends Component {
  state = {
    id: this.props.match.params.id,
    invalidForm: true,
    formData: {
      name: "",
      ingredients: "",
      directions: "",
    },
  };

  async componentDidMount() {
    const post = await postAPI.getOne(this.state.id);
    console.log(post);
    this.setState({
      formData: {
        name: post.name,
        ingredients: post.ingredients,
        directions: post.directions,
        _id: post._id,
      },
    });
  }

  formRef = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    // handleAddRecipe function will render in App.jsx
    this.props.handleEditPost(this.state.formData);
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
        <div className="EditPage">
          <h1>Edit Recipe</h1>

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
              className="btn btn-dark spacing"
              disabled={this.state.invalidForm}
              style={{ backgroundColor: "rgb(46,84,101)" }}
            >
              Save Recipe
            </button>
          </form>
          <div>
            <Link
              className="btn"
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

export default withRouter(EditBoardPost);
