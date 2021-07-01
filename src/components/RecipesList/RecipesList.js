import React from "react";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Recipe from "../Recipe/Recipe";
import { motion } from "framer-motion";

function RecipesList() {
  const recipes = useSelector((state) => state.recipes);
  const variants = {
    show: (custom) => ({
      scale: 1,
      transition: { delay: custom * 0.1, duration: 0.5 },
    }),
  };

  console.log(recipes)

  return (
    <Grid
      container
      spacing={4}
      justify={recipes.length < 3 ? "center" : "space-evenly"}
    >
      {recipes.map((recipe, index) => {
        return (
          <Grid
            component={motion.div}
            layout
            custom={index}
            variants={variants}
            animate="show"
            initial={{ scale: 0 }}
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

export default RecipesList;
