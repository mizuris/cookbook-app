import React from "react";
import Recipe from "./Recipe";

function RecipesList({ recipesList }) {
  
  console.log(recipesList);
  return (
    <div className="container">
      {recipesList.map((recipe) => {
        return <Recipe key={recipe.id} recipe={recipe} />
      })}
    </div>
  );
}

export default RecipesList;
