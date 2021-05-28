import React from "react";
import Recipe from "../Recipe/Recipe";
import Grid from "@material-ui/core/Grid";

function RecipeList({ recipes }) {
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      {recipes.length
        ? recipes.map((recipe) => {
            return (
              <Grid item xs={12} lg={4}>
                <Recipe recipe={recipe} key={recipe.id} />
              </Grid>
            );
          })
        : ""}
    </Grid>
  );
}

export default RecipeList;
