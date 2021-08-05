const mongoose = require("mongoose");
const { Schema } = mongoose;

const recipeSchema = new Schema({
  createdBy: { type: Schema.Types.ObjectId, ref: "User" },
  title: { type: String },
  ingredients: [{ type: String }],
  instructions: { type: String },
  likes: [
    {
      fullname: String,
      createdAt: String,
    },
  ],
  dislikes: [
    {
      fullname: String,
      createdAt: String,
    },
  ],
  comments: [
    {
      body: String,
      fullname: String,
      createdAt: String,
    },
  ],
  image: { type: String },
  public: { type: Boolean },
  categories: [{ type: Schema.Types.ObjectId, ref: "Category" }],
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
