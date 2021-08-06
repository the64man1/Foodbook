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



export const QUERY_RECIPE = gql`
    query recipe {
        _id
        title
        categories
        ingredients
        instructions
        likes
        dislikes
        comments
        public
    }`;