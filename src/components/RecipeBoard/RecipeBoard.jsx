import React from "react";

const recipeBoard = () => {
  return (
    <div className="container-sm">
      <h1 className="h1">Recipe Board</h1>
      <div className="">
        <div>
          <br />
          <label className="form-label" htmlFor="formControlInput1">
            Recipe Post
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="Enter Post..."
          />
          <button type="button" className="btn btn-outline-primary">
            Create Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default recipeBoard;
