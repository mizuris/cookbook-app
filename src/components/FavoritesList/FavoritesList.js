import React from "react";
import Recipe from "../Recipe/Recipe";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";

function FavoritesList() {
  const favorites = useSelector((state) => state.favorites);

  return (
    <Grid container spacing={6}>
      {favorites.length ? (
        favorites.map((recipe) => {
          return (
            <Grid item xs={12} lg={4} key={recipe.id}>
              <Recipe recipe={recipe} />
            </Grid>
          );
        })
      ) : (
        <p>No recipes</p>
      )}
    </Grid>
  );
}

export default FavoritesList;
