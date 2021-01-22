const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const reviewSchema = new Schema(
//   {
//     reviewer: String,
//     reviewerPhoto: String,
//     rating: { type: Number, min: 1, max: 5 },
//     content: String,
//   },
//   {
//     timestamps: true,
//   }
// );

const recipeSchema = new Schema(
  {
    title: { type: String},
    ingredients: { type: String},
    recipe: { type: String},
    label: { type: String},
    image: { type: String},
    source: { type: String},
    url: { type: String},
    yield: { type: Number},
    healthLabels: { type: String},
    calories: { type: Number},
    totalTime: { type: Number},
    totalNutrients: { type: String},
    users:{type:Schema.Types.ObjectId, ref: 'User'},

  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Recipe", recipeSchema);
