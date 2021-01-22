import React from "react";
import { Link } from "react-router-dom";

function PostCard({ post, handleDeletePost }) {
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

      <Link
        className=" spacing btn btn-dark"
        style={{ backgroundColor: "rgb(46,84,101)" }}
      >
        Edit
      </Link>

      <button
        type="submit"
        className="spacing btn btn-danger"
        onClick={() => handleDeletePost(post._id)}
      >
        Delete
      </button>
    </div>
  </>;
}

export default PostCard;
