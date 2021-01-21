const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const replySchema = new Schema(
  {
    addedBy: { type: Schema.Types.ObjectId, ref: "User" },
    reply: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const boardSchema = new Schema(
  {
    addedBy: { type: Schema.Types.ObjectId, ref: "User" },
    name: { type: String, required: true },
    ingredients: { type: [String], required: true },
    directions: { type: String, required: true },
    replies: [replySchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Board", boardSchema);
