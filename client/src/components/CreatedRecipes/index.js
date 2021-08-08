import React from 'react';
import { Card } from 'semantic-ui-react';

function CreatedRecipes(recipe) {
    const {
        createdBy,
        title,
        ingredients,
        instructions,
        likes,
        dislikes,
        comments,
        image,
        //public,
        categories
    } = recipe;

    return (
        <Card.Content>
            <p>{title}</p>
            <p>{instructions}</p>
        </Card.Content>
    )
}

export default CreatedRecipes;