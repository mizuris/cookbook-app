import React from "react";
import { useSelector } from "react-redux";
import Recipe from "./Recipe";
import { Grid } from "@material-ui/core";
import { motion } from "framer-motion";

function RecipeList() {
  const recipes = useSelector((state) => state.recipes);

  return (
    <>
      {recipes.length ? (
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Your recipes
        </motion.h1>
      ) : (
        ""
      )}
      <Grid
        container
        spacing={4}
        justify={recipes.length < 3 ? "center" : "space-evenly"}
        alignItems="stretch"
      >
        {recipes.length
          ? recipes.map((recipe) => {
              return (
                <Grid item xs={12} md={6} lg={4}>
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
