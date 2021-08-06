import React from 'react';

function RecipeItem(recipe) {
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
        <div className="card">
            <img className="card-img-top" src={image} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p class="card-text">
                    {ingredients}
                </p>
                <p class="card-text">
                    {instructions}
                </p>
            </div>
        </div>
    )
}

export default RecipeItem;