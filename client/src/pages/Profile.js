import React from 'react'
import { QUERY_ME } from '../utils/queries';
import { useQuery } from '@apollo/client';
import { Card } from 'semantic-ui-react';
import CreatedRecipes from '../components/CreatedRecipes'

function Profile({firstName, lastName,userName, email, Recipe1, Recipe2}) {
    const { loading, data } = useQuery(QUERY_ME);
    console.log(data)

    if(loading) {
        return <h2>Loading...</h2>
    }

    return (
        <Card>
            <Card.Content>{data.me.firstName} {data.me.lastName}</Card.Content>
            <Card.Content>Username: {data.me.username}</Card.Content>
            <Card.Content>Email: {data.me.email}</Card.Content>
            {data.me.createdRecipes.map((recipe) => {
                <CreatedRecipes
                  key={recipe.id}
                  id={recipe.id}
                  image={recipe.image}
                  title={recipe.title}
                  instructions ={recipe.instructions}
                  ingredients={recipe.ingredients}
                  createdBy={recipe.createdBy}
                  likes={recipe.likes}
                  dislikes={recipe.dislikes}
                  comments={recipe.comments}
                  categories={recipe.categories}
                />
            })}
        </Card>
    )
}

export default Profile;

