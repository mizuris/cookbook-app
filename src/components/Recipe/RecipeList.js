import React from "react";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Recipe from "./Recipe";

function RecipeList() {
  const recipes = useSelector((state) => state.recipes);

  return (
    <Grid
      container
      spacing={4}
      justify={recipes.length < 3 ? "center" : "space-evenly"}
      alignItems="stretch"
    >
      {recipes.length
        ? recipes.map((recipe) => {
            return (
              <Grid item xs={12} md={6} lg={3} key={recipe.id}>
                <Recipe recipe={recipe} />
              </Grid>
            );
          })
        : ""}
    </Grid>
  );
}

export default RecipeList;
