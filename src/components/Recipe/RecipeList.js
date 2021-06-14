import React from "react";
import { useSelector } from "react-redux";
import Recipe from "./Recipe";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    minWidth: 200,
    justifyContent: "flex-start",
    alignItems: "stretch",
  },
}));

function RecipeList() {
  const recipes = useSelector((state) => state.recipes);
  const classes = useStyles();

  return (
    <>
      {recipes.length ? <h1>Results</h1> : ""}
      <Grid container spacing={4} className={classes.root}>
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
