const mongoose = require("mongoose");
const { Schema } = mongoose;

const recipeSchema = new Schema({
  createdBy: { type: Schema.Types.ObjectId, ref: "User" },
  title: { type: String },
  ingredients: [{ type: String }],
  instructions: { type: String },
  likes: [
    {
      user: String,
      likedOn: String,
    },
  ],
  dislikes: [
    {
      user: String,
      dislikedOn: String,
    },
  ],
  comments: [
    {
      comment: String,
      user: String,
      commentedOn: String,
    },
  ],
  image: { type: String },
  public: { type: Boolean },
  categories: [{ type: Schema.Types.ObjectId, ref: "Category" }],
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
