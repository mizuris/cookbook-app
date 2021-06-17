import React from "react";
import { useSelector } from "react-redux";
import { List, ListItem } from "@material-ui/core";
import FavoriteRecipe from "./FavoriteRecipe";
import { motion } from "framer-motion";

function FavoritesList({ favListRef }) {
  const favorites = useSelector((state) => state.favorites);

  return (
    <>
      {favorites.length ? (
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Favorites
        </motion.h1>
      ) : (
        ""
      )}
      <List ref={favListRef}>
        {favorites.length
          ? favorites.map((recipe) => {
              return (
                <motion.div
                  layout
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  key={recipe.id}
                >
                  <ListItem alignItems="flex-start" divider>
                    <FavoriteRecipe recipe={recipe} />
                  </ListItem>
                </motion.div>
              );
            })
          : ""}
      </List>
    </>
  );
}

export default FavoritesList;
