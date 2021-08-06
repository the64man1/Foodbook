import React from 'react';
import RecipeItem from '../RecipeItem';
import { useQuery } from '@apollo/client';
//import { GET_ALL_RECIPES } from '../../utils/queries';

function RecipeList() {
    const mockData = [
        {
          //createdBy: "user1",
          title: "Good food",
          ingredients: ["onions", "celery"],
          instructions: "Cook this",
          numberOfLikes: 0,
          numberOfDislikes: 0,
          comments: [],
          image: "",
          //public: true,
          categories: [],
        },
        {
          //createdBy: "user1",
          title: "Papri Chaat(Indian Street Snack)",
          ingredients: [
            "Chicpeas",
            "tamarind paste",
            "green pepper",
            "mint",
            "yogurt",
          ],
          instructions: "Boiled Chickpeas and mixed other ingrident to taste",
          numberOfLikes: 0,
          numberOfDislikes: 0,
          comments: [],
          image: "",
          //public: true,
          categories: [],
    },
    {
        //createdBy: users[0]._id,
        title: "Breakfast Tacos",
        ingredients: ["butter", "corn tortillas", "3 eggs","red potatos","shredded cheddar cheese"],
        instructions: " Cook potatos in microwave, fry potatos with butter and make them slightly brown, add salt and pepper, add eggs to potato, heat tortillas in microwave for 45 seconds.",
        numberOfLikes: 0,
        numberOfDislikes: 0,
        comments: [],
        image: "",
        //public: true,
        categories: []
      }];

    //const { loading, data } = useQuery(GET_ALL_RECIPES);
    
    return (
        <div className="my-2">
          <h2>The Foodbook Recipes:</h2>
            <div className="flex-row">
              {mockData.map((recipe) => (
                <RecipeItem
                  key={recipe._id}
                  _id={recipe._id}
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