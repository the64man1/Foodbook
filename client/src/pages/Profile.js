import React from 'react'
import { QUERY_ME } from '../utils/queries';
import { useQuery } from '@apollo/client';
import { Card } from 'semantic-ui-react';
import CreatedRecipes from '../components/CreatedRecipes'

function Profile() {
    const { loading, data } = useQuery(QUERY_ME);

    if(loading) {
        return <h2>Loading...</h2>
    } else {
        console.log(data.me.createdRecipes)
        return (
            <>
            <Card>
                <Card.Content>{data.me.firstName} {data.me.lastName}</Card.Content>
                <Card.Content>Username: {data.me.username}</Card.Content>
                <Card.Content>Email: {data.me.email}</Card.Content>
            </Card>
            <Card>
                <Card.Header>Created Recipes</Card.Header>
                {data.me.createdRecipes.map((recipe) => {
                    return <CreatedRecipes
                      key={recipe.id}
                      id={recipe.id}
                      title={recipe.title}
                      instructions ={recipe.instructions}
                    />
                })}
            </Card>
            </>
        )
        // return (
        //     <Card>
        //         <Card.Content>{data.me.firstName} {data.me.lastName}</Card.Content>
        //         <Card.Content>Username: {data.me.username}</Card.Content>
        //         <Card.Content>Email: {data.me.email}</Card.Content>
        //         {data.me.createdRecipes.map((recipe) => {
        //             <CreatedRecipes
        //               key={recipe.id}
        //               id={recipe.id}
        //               image={recipe.image}
        //               title={recipe.title}
        //               instructions ={recipe.instructions}
        //               ingredients={recipe.ingredients}
        //               createdBy={recipe.createdBy}
        //               likes={recipe.likes}
        //               dislikes={recipe.dislikes}
        //               comments={recipe.comments}
        //               categories={recipe.categories}
        //             />
        //         })}
        //     </Card>
        // )
    }
}

export default Profile;

