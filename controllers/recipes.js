const APP_ID = process.env.APP_ID;
const APP_KEY = process.env.APP_KEY;
const BASE_URL = "api.edamam.com";
const Recipe = require("../models/recipe");
const axios = require("axios");

module.exports = {
  search,
  recipeDetails,
};

function search(req, res) {
  let query = req.body.query;
  axios
    .get(
      `https://${BASE_URL}/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=21`
    )
    .then((recipes) => {
      // console.log(recipes.data.hits)
      res.json(recipes.data.hits);
    });
}

function recipeDetails(req, res) {
  Recipe.findById(req.params.id);
  console.log(req.params.id);
}


// function index(req, res) {
//     Recipe.find({})
//     .populate('addedby')
//     .then((recipe) => {res.json(recipe)})
//     .catch(err => {res.json(err)})
// }

// render the search function within service recipe-api.js
