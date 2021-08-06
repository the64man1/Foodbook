import { gql } from '@apollo/client';

export const LOGIN = gql`
    mutation `;


export const ADD_USER = gql`
    mutation {
        addUser(input: {...}) {
            firstName
            lastName
            email
            password
        }

        input firstName{
            type: String!
        }

        input lastName{
            type: String!
        }

        input eamil{
            type: String!
        }

        input password{
            type:String!
        }
    }`;

export const CREATE_RECIPE = gql`
    mutation {
        createRecipe(input:{...}) {
            createdBy
            title
            ingredients
            instructions
            likes {
                username
                likedOn
            }
            dislikes {
                username
                dislikedOn
            }
            comments {
                username
                comment
                commentedOn
            }
            image
            public
            categories
        }

        input createdBy{
            type: Schema.Types.ObjectId, ref: "User"
        }

        input title{
            type: String!
        }

        input ingredients{
            type: String!
        }

        input instructions{
            type: String!
        }

        input numberOfLikes{
            type: Number!
        }

        input numberOfDislikes{
            type: Number!
        }

        input comments{
            type: [],
        }

        input image{
            type:"",
        }

        input public{
            type: Boolean!
        }

        input categories{
            type:[Category.schema]
        }
    }
  }
`;

export const DELETE_RECIPE = gql`
    mutation($id: Int) {
        deleteRecipe(id: $id)
    }`;

export const UPDATE_RECIPE = gql``;



//mutations: 
// add user
// login
// create recipe
// delete recipe (creator can delete)
// update recipe (creator can update)


// mutation ADD_USER ($input: UpdatePostInput! { updatePost(input: $input) {...}})