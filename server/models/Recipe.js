// TODO: This whole model
const mongoose = require('mongoose');

const { Schema } = mongoose;

const recipeSchema = new Schema({
    createdBy: [ User ],
    ingredients: [],
    instructions: '',
    numberOfLikes: Number,
    numberOfDislikes: Number,
    comments: [],
    image: '',
    public: Boolean,
    categories: [Category]
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;