import React from "react";
import axios from "axios";
import Recipe from "./Recipe";

function RecipesList({ recipeList }) {

  const getRecipeInfo = async (id) => {
    const informationUrl = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}&includeNutrition=false`;
    const recipeInfoResult = await axios.get(informationUrl);
    console.log(recipeInfoResult.data);
  };

  return (
    <div className="container">
      {recipeList.map((recipe) => {
        return (
          <Recipe
            key={recipe.id}
            recipe={recipe}
            getRecipeInfo={() => getRecipeInfo(recipe.id)}
          />
        );
      })}
    </div>
  );
}

export default RecipesList;
