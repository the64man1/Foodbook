import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    query me {
        _id
        username
        firstname
        lastName
        email
        password
        savedRecipes
        createdRecipes
        
    }`;



export const QUERY_RECIPES = gql`
query allRecipes {
    allRecipes {
      id
      title
      createdBy {
        id
        username
        firstName
        lastName
        email
      }
      ingredients
      instructions
      likes {
        username
      }
      dislikes {
        username
      }
      image
    }
  }`;


export const QUERY_SINGLE_RECIPE = gql`
    query singleRecipe($recipeID: ID) {
        singleRecipe(id: $recipeID) {
        _id
        title
        categories
        ingredients
        instructions
        likes {
            username
            likedOn
        }
        dislikes{
            username
            dislikedOn
        }
        comments {
            username
            comment
            commentedOn
        }
        public
        image
        }
    }
`;
