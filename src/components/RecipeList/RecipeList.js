import React from "react";
import Recipe from "../Recipe/Recipe";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(() => ({
  root: {
    minWidth: 200,
    justifyContent: "flex-start",
    alignItems: "center"
  },
}));

function RecipeList({ recipes }) {
  const classes = useStyles();
  return (
    <Grid container spacing={6} direction="row">
      {recipes.length
        ? recipes.map((recipe) => {
            return (
              <Grid
                item
                className={classes.root}
                key={recipe.id}
                xs={12}
                lg={4}
              >
                <Recipe recipe={recipe} />
              </Grid>
            );
          })
        : ""}
    </Grid>
  );
}

export default RecipeList;
