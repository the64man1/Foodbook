import { gql } from '@apollo/client';

export const QUERY_USER = gql``;

// export const QUERY_SINGLE_RECIPE = gql`
//     query singeRecipe($recipeID: ID) {
//         singleRecipe(id: $recipeID) {
//             createdBy
//             title
//             ingredients
//             instructions
//             likes
//             dislikes
//             comments
//             image
//             public
//             categores
//         }
//     }
// `;