const mongoose = require("mongoose");
const { Schema } = mongoose;

const Category = require("./Category");

const recipeSchema = new Schema({
  createdBy: [User],
  //added recipe title string to schema.
  recipeTitle: String, 
  ingredients: [],
  instructions: "",
  numberOfLikes: Number,
  numberOfDislikes: Number,
  comments: [],
  image: "",
  public: Boolean,
  categories: [Category.schema],
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
