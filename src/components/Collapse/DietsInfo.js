import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import CustomChip from "../CustomChip/CustomChip";

const useStyles = makeStyles(() => ({
  root: {
    margin: "1.5rem 0",
  },
}));

function DietsInfo({ recipe }) {
  const classes = useStyles();
  const { vegetarian, vegan, dairyFree, glutenFree } = recipe;

  return (
    <Grid className={classes.root} container spacing={1}>
      <Grid item xs={12} sm={6}>
        <CustomChip label="Vegetarian" type={vegetarian} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CustomChip label="Dairy free" type={dairyFree} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CustomChip label="Gluten free" type={glutenFree} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CustomChip label="Vegan" type={vegan} />
      </Grid>
    </Grid>
  );
}

export default DietsInfo;
