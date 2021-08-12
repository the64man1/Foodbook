import React from 'react';
import RecipeItem from '../RecipeItem';
import { useQuery } from '@apollo/client';
import beefPie from '../../images/Beef-Pie.jpg' ; 
import beefTataki from '../../images/Beef-Tataki.jpg' ; 
import guacamolePasta from '../../images/Guacamole-Pasta.jpg' ; 
import breakfastTaco from '../../images/Breakfast-Tacos.jpg' ; 
import goodFood from '../../images/good-food.jpg' ; 
import PapriChaat from '../../images/Papri-Chaat.jpg' ; 
import "../../index.css";
import "./style.css"; 

import { QUERY_RECIPES } from '../../utils/queries';

import Welcome from '../Welcome'

function RecipeList() {
    
    const { loading, data } = useQuery(QUERY_RECIPES);

    const recipeData = data?.allRecipes || [];

    return (
        <div className="my-2">
          <Welcome />
          <h2>The Foodbook Recipes:</h2>
            <div className="cjlFlex" >
              {recipeData.map((recipe) => (
                <RecipeItem
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
              ))}
            </div>
        </div>
      );
}

export default RecipeList;