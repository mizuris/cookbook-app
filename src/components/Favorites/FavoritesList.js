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
                transition={{ duration: 0.5 }}
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
