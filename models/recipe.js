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
    title: { type: String },
    ingredients: { type: [Schema.Types.Mixed] },
    recipe: { type: String },
    label: { type: String },
    image: { type: String },
    source: { type: String },
    url: { type: String },
    yield: { type: Number },
    healthLabels: { type: [String] },
    calories: { type: Number },
    totalTime: { type: Number },
    totalNutrients: { type: Schema.Types.Mixed },
    digest: { type: Schema.Types.Mixed },
  },
  {
    timestamps: true,
  }
);

module.exports = {
  recipeSchema,
  model: mongoose.model("Recipe", recipeSchema),
};
