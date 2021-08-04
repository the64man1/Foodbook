const mongoose = require("mongoose");
const { Schema } = mongoose;

const User = require("./User")

const recipeSchema = new Schema({
  createdBy: { type: Schema.Types.ObjectId, ref: "User" },
  ingredients: [{ type: String }],
  instructions: { type: String },
  numberOfLikes: { type: Number },
  numberOfDislikes: { type: Number },
  comments: [{ type: String }],
  image: { type: String },
  public: { type: Boolean },
  categories: [{ type: Schema.Types.ObjectId, ref: "Category" }],
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
