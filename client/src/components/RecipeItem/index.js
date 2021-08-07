import React from 'react';
import "./style.css"; 

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
        <div className="card-body">
          <img width="200" height="200"  src={image} />
          <h5 className="card-title">{title}</h5>
          <p class="card-text">{ingredients}</p>
          <p class="card-text">{instructions}</p>
        </div>
      </div>
    );
}

export default RecipeItem;