const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
  {
    reviewer: String,
    reviewerPhoto: String,
    rating: { type: Number, min: 1, max: 10 },
    content: String,
  },
  {
    timestamps: true,
  }
);

const recipeSchema = new Schema(
  {
    title: { type: String, required: true },
    ingredients: { type: String, required: true },
    recipe: { type: String, required: true },
    label: { type: String, required: true },
    image: { type: String, required: true },
    source: { type: String, required: true },
    url: { type: String, required: true },
    yield: { type: Number, required: true },
    healthLabels: { type: String, required: true },
    calories: { type: Number, required: true },
    totalTime: { type: Number, required: true },
    totalNutrients: { type: String, required: true },
    addedBy: { type: Schema.Types.ObjectId, ref: "User" },
    reviews: [reviewSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Recipe", recipeSchema);
