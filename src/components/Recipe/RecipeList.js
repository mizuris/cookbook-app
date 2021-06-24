import React from "react";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Recipe from "./Recipe";
import { motion } from "framer-motion";

function RecipeList() {
  const recipes = useSelector((state) => state.recipes);

  return (
    <Grid
      container
      spacing={4}
      justify={recipes.length < 3 ? "center" : "space-evenly"}
    >
      {recipes.map((recipe) => {
        return (
          <Grid
            component={motion.div}
            layout
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            item
            xs={12}
            md={6}
            lg={3}
            key={recipe.id}
          >
            <Recipe recipe={recipe} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default RecipeList;
