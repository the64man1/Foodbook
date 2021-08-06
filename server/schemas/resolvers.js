const { User, Recipe } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = User.findOne({ _id: context.user._id })
                return userData;
            }
            throw new AuthenticationError("Please log in");
        },
        allRecipes: async () => {
            return await Recipe.find({}).populate("createdBy");
        },
        singleRecipe: async (parent, { _id }) => {
            return await Recipe.findById(_id);
        }
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
                throw new AuthenticationError("Password incorrect")
            }

            const token = signToken(user);

            return { token, user };
        },
        addRecipe: async (parent, { recipe }, context) => {
            if (context.user) {
                const newRecipe = new Recipe({ recipe });

                await Recipe.create(newRecipe);
                await User.findByIdAndUpdate(context.user._id, { $push: { createdRecipes: newRecipe } });

                return newRecipe;
            }
        }
    }
}

module.exports = resolvers;