import React from "react";
import { useSelector } from "react-redux";
import { List, ListItem } from "@material-ui/core";
import FavoriteRecipe from "./FavoriteRecipe";
import { motion, AnimatePresence } from "framer-motion";

function FavoritesList({ favListRef }) {
  const favorites = useSelector((state) => state.favorites);

  return (
    <List ref={favListRef}>
      <AnimatePresence>
        {favorites.length
          ? favorites.map((recipe) => {
              return (
                <motion.div
                  key={recipe.id}
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <ListItem alignItems="flex-start" divider>
                    <FavoriteRecipe recipe={recipe} />
                  </ListItem>
                </motion.div>
              );
            })
          : ""}
      </AnimatePresence>
    </List>
  );
}

export default FavoritesList;
