import React from "react";
import { useSelector } from "react-redux";
import { List, ListItem } from "@material-ui/core";
import FavoriteRecipe from "./FavoriteRecipe";

function FavoritesList() {
  const favorites = useSelector((state) => state.favorites);
  return (
    <List>
      {favorites.length
        ? favorites.map((recipe) => {
            return (
              <ListItem key={recipe.id}>
                <FavoriteRecipe recipe={recipe} />
              </ListItem>
            );
          })
        : ""}
    </List>
  );
}

export default FavoritesList;
