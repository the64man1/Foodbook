import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    query user {
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
     {
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
    }`;


export const QUERY_SINGLE_RECIPE = gql`
    query singleRecipe($recipeID: ID) {
        singleRecipe(id: $recipeID)
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
`;