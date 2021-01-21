const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const replySchema = new Schema(
  {
    postedBy: String,
    avatar: String,
    message: String,
  },
  {
    timestamps: true,
  }
);

const boardSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    name: String,
    ingredients: String,
    directions: String,
    replies: [replySchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Message", boardSchema);
