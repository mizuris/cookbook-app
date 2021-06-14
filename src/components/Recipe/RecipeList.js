import React from "react";
import { useSelector } from "react-redux";
import Recipe from "./Recipe";
import { Grid } from "@material-ui/core";

function RecipeList() {
  const recipes = useSelector((state) => state.recipes);

  return (
    <>
      {recipes.length ? <h1>Results</h1> : ""}
      <Grid container spacing={4} justify="flex-start" alignItems="stretch">
        {recipes.length
          ? recipes.map((recipe) => {
              return (
                <Grid item key={recipe.id} xs={12} md={6} lg={4}>
                  <Recipe recipe={recipe} />
                </Grid>
              );
            })
          : ""}
      </Grid>
    </>
  );
}

export default RecipeList;
