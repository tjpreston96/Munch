import React from "react";

const recipeBoard = () => {
  return (
    <div className="mb-3">
      <div className="container-sm">
        <h1 className="h1">Recipe Board</h1>
        <div>
          <br />
          <br />
          <label className="form-label" htmlFor="formControlInput1">
            Recipe Name
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="Enter Name..."
            required
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
          />
          <br />
          <button type="button" className="btn btn-outline-primary">
            Create Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default recipeBoard;
