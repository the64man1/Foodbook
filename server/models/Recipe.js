const mongoose = require("mongoose");
const { Schema } = mongoose;

const recipeSchema = new Schema({
  createdBy: { type: Schema.Types.ObjectId, ref: "User" },
  title: { type: String },
  ingredients: [{ type: String }],
  instructions: { type: String },
  likes: [
    {
      username: String,
      likedOn: String,
    },
  ],
  dislikes: [
    {
      username: String,
      dislikedOn: String,
    },
  ],
  comments: [
    {
      username: String,
      comment: String,
      commentedOn: String,
    },
  ],
  image: { type: String },
  public: { type: Boolean },
  categories: [{ type: Schema.Types.ObjectId, ref: "Category" }],
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
