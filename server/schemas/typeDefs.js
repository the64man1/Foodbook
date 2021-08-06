const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    firstName: String
    lastName: String
    email: String
    savedRecipes: [Recipe]
    createdRecipes: [Recipe]
  }

  type Recipe {
    _id: ID
    createdBy: User
    title: String
    ingredients: [String]
    instructions: String
    likes: [Likes]
    dislikes: [Dislikes]
    comments: [Comments]
    image: String
    public: Boolean
    categores: [Category]
  }

  type Likes {
    id: ID!
    username: String
    likedOn: String
  }

  type Dislikes {
    id: ID!
    username: String
    dislikedOn: String
  }

  type Comments {
    id: ID!
    username: String
    comment: String
    commentedOn: String
  }

  type Category {
    _id: ID
    name: String
  }

  type Query {
    me: User
    allRecipes: [Recipe]
    singleRecipe: Recipe
  }

  type Auth {
    token: ID!
    user: User
  }

  input NewRecipeInput {
    _id: ID
    createdBy: String
    title: String
    ingredients: [String]
    instructions: String
    numberOfLikes: Int
    numberOfDislikes: Int
    comments: [String]
    image: String
    public: Boolean
  }

  type Mutation {
    login(email: String!, password: String!): Auth!
    addUser(
      username: String!
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    addRecipe(recipe: NewRecipeInput): Recipe!
  }
`;

module.exports = typeDefs;
