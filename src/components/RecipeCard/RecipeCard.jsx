import React from 'react'
import { Link } from 'react-router-dom'

const RecipeCard = (props) => {
  return (
    <>
      <Link
        to={{
          pathname: `/search/${props.recipe.label}`
        }}
      >
        {props.recipe.ingredients}
      </Link>
      <br/>
    </>
  );
}

export default RecipeCard;