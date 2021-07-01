import React from "react";
import { Grid } from "@material-ui/core";

function DietsInfo({ recipe }) {
  const { vegetarian, vegan, dairyFree, glutenFree } = recipe;
  return (
    <Grid container>
      <Grid item xs={4}>
        {vegetarian ? "Yes!" : "No"}
      </Grid>
      <Grid item xs={4}>
        {vegan ? "Yes!" : "No"}
      </Grid>
      <Grid item xs={4}>
        {dairyFree ? "Yes!" : "No"}
      </Grid>
      <Grid item xs={4}>
        {glutenFree ? "Yes!" : "No"}
      </Grid>
    </Grid>
  );
}

export default DietsInfo;
