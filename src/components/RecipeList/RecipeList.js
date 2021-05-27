import React from "react";
import Recipe from "../Recipe/Recipe";

function RecipeList({ recipes }) {
  return recipes.length
    ? recipes.map((recipe) => {
        return <Recipe recipe={recipe} key={recipe.id} />;
      })
    : "";
}

export default RecipeList;
