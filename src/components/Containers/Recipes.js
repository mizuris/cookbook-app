import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import RecipesLoader from "../Loader/RecipesLoader";
import RecipesList from "../RecipesList/RecipesList";

function Recipes({ recipesLoading }) {
  return (
    <>
      <SectionHeader control="recipes" text="Your recipes" />
      {recipesLoading ? <RecipesLoader /> : <RecipesList />}
    </>
  );
}

export default Recipes;
