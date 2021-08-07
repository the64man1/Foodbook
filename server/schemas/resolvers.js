const { User, Recipe, Category } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = User.findOne({ _id: context.user._id });
        return userData;
      }
      throw new AuthenticationError("Please log in");
    },
    allRecipes: async () => {
      return await Recipe.find({}).populate("createdBy").populate("categories");
    },
    singleRecipe: async (parent, { _id }) => {
      return await Recipe.findById(_id);
    },
    categories: async () => {
      return await Category.find({});
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parents, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Email not found");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Password incorrect");
      }

      const token = signToken(user);

      return { token, user };
    },
    addRecipe: async (
      parent,
      { recipe: { title, ingredients, instructions, image, public } },
      context
    ) => {
      if (context.user) {
        const newRecipe = new Recipe({
          createdBy: context.user._id,
          title,
          ingredients,
          instructions,
          image,
          public,
        });

        await Recipe.create(newRecipe);
        await User.findByIdAndUpdate(context.user._id, {
          $push: { createdRecipes: newRecipe },
        });

        return newRecipe;
      }

      // GraphQL - must add in HTTP Headers
      // {
      //   "Authorization": "Bearer AddTokenHere"
      // }

      // Throw error if user token is not provided
      throw new Error("Authorization token must be provided");
    },
    removeRecipe: async (_, { recipeId, createdBy }, context) => {
      const loggedInUserId = context.user._id;
      console.log(loggedInUserId);
      console.log(createdBy);

      if (loggedInUserId) {
        console.log("User is logged in");
        if (loggedInUserId === createdBy) {
          console.log("User can delete recipe");
          const recipe = await Recipe.findOneAndDelete({
            _id: recipeId,
            createdBy: context.user._id,
          });

          await User.findOneAndUpdate(
            { _id: context.user._id },
            { $pull: { createdRecipes: recipe._id } }
          );

          return recipe;
        }

        // Throw error if user is not the creator
        throw new Error("You are not the creator of this recipe");
      }

      // Throw error if user token is not provided
      throw new Error("Authorization token must be provided");
    },
  },
};

module.exports = resolvers;
