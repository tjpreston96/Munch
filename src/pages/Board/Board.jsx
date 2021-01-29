import React, { Component } from "react";
import "./Board.css";
import * as postAPI from "../../services/postService";
import { Link } from "react-router-dom";

// import RecipeBoard from "../../components/RecipeBoard/RecipeBoard";

class Board extends Component {
  state = {
    invalidForm: true,
    posts: [],
    formData: {
      name: "",
      directions: "",
      ingredients: "",
    },
    user: this.props.user,
  };

  handleCreate = async (formData) => {
    const recipes = await postAPI.createPost(formData);
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
            <Link
              className="btn btn-info"
              style={{ backgroundColor: "rgb(46,84,101)" }}
              to={{ pathname: "/add" }}
            >
              Add Recipe
            </Link>
            {this.props.posts.map((post) => (
              <>
                <div className="posts">
                  <p>
                    <b>Name:</b> <br />
                    {post.name}
                    <br />
                    <b>Ingredients:</b>
                    <br />
                    {post.ingredients}
                    <br />
                    <b>Directions:</b>
                    <br />
                    {post.directions}
                  </p>

                  <Link to ={`/board/${post._id}`}
                    className=" spacing btn btn-dark"
                    style={{ backgroundColor: "rgb(46,84,101)" }}
                  >
                    Edit
                  </Link>
                  <button onClick={()=> this.props.handleDeletePost(post._id)}
                    className="spacing btn"
                    style={{ backgroundColor: "#FF7F50" }}
                  >
                    Delete
                  </button>
                </div>
              </>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Board;
