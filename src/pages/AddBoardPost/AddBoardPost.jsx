import React, { Component } from "react";
import "./AddBoardPost.css";
import { Link } from "react-router-dom";

class AddBoardPost extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="addPostPage">
          <h1>Add Recipe</h1>
          <div>

          <Link className='btn btn-info' style={{ backgroundColor: "rgb(46,84,101)" }} to={{ pathname: "/board" }}>Cancel</Link>
          </div>
        </div>
      </>
    );
  }
}

export default AddBoardPost;
