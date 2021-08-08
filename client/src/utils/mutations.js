import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        id
        username
        firstName
        lastName
        email
      }
      token
    }
  }
`;

export const ADD_USER = gql`
  mutation addNewUser(
    $username: String!
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      username: $username
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      user {
        id
        username
        firstName
        lastName
        email
      }
      token
    }
  }
`;

export const CREATE_RECIPE = gql`
  mutation createRecipe(
      $title: String!
      $ingredients: String!
      $instructions: String!
      $image: String!
      $public: Boolean!
  ) {
      addRecipe(
          title: $title
          ingredients: $ingredients
          instructions: $instructions
          image: $image
          public: $public
      ) {
            title
            instructions
      }
  }
`;

// export const CREATE_RECIPE = gql`
//     mutation {
//         createRecipe(input:{...}) {
//             createdBy
//             title
//             ingredients
//             instructions
//             likes {
//                 username
//                 likedOn
//             }
//             dislikes {
//                 username
//                 dislikedOn
//             }
//             comments {
//                 username
//                 comment
//                 commentedOn
//             }
//             image
//             public
//             categories
//         }

//         input createdBy{
//             type: Schema.Types.ObjectId, ref: "User"
//         }

//         input title{
//             type: String!
//         }

//         input ingredients{
//             type: String!
//         }

//         input instructions{
//             type: String!
//         }

//         input numberOfLikes{
//             type: Number!
//         }

//         input numberOfDislikes{
//             type: Number!
//         }

//         input comments{
//             type: [],
//         }

//         input image{
//             type:"",
//         }

//         input public{
//             type: Boolean!
//         }

//         input categories{
//             type:[Category.schema]
//         }
//     }
//   }
// `;

export const DELETE_RECIPE = gql`
  mutation ($id: ID) {
    deleteRecipe(id: $id)
  }
`;

// export const UPDATE_RECIPE = gql``;

//mutations:
// add user
// login
// create recipe
// delete recipe (creator can delete)
// update recipe (creator can update)

// mutation ADD_USER ($input: UpdatePostInput! { updatePost(input: $input) {...}})
