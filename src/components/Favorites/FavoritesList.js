import React from "react";
import { useSelector } from "react-redux";
import { List, ListItem } from "@material-ui/core";
import FavoriteRecipe from "./FavoriteRecipe";
import { motion, AnimatePresence } from "framer-motion";

function FavoritesList() {
  const favorites = useSelector((state) => state.favorites);

  return (
    <List id="favorites-list">
      <AnimatePresence>
        {favorites.length &&
          favorites.map((recipe) => {
            return (
              <ListItem
                key={recipe.id}
                alignItems="flex-start"
                divider
                component={motion.div}
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.3 }}
                exit={{ opacity: 0 }}
              >
                <FavoriteRecipe recipe={recipe} />
              </ListItem>
            );
          })}
      </AnimatePresence>
    </List>
  );
}

export default FavoritesList;
