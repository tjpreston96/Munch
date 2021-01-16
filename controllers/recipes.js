const APP_ID = process.env.APP_ID;
const APP_KEY = process.env.APP_KEY;
const BASE_URL = "api.edamam.com";

// const Recipe = require("../models/recipe");
const axios = require("axios");

module.exports = {
  search,
  //     index,
  // new: newRecipe,
};

function search(req, res) {
  let query = req.body.query;
  axios
    .get(
      `https://${BASE_URL}/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=12`
    )
    .then((response) => {
      res.json(response)
      console.log(response)
    })
    .catch((error) => {
      console.log(error);
    });
}
// function newRecipe(req, res) {
//     res.render("")
// }

// function index(req, res) {
//     Recipe.find({})
//     .populate('addedby')
//     .then((recipe) => {res.json(recipe)})
//     .catch(err => {res.json(err)})
// }

// render the search function within service recipe-api.js
