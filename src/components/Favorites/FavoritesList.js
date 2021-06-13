import React from "react";
import { useSelector } from "react-redux";
import { List, ListItem } from "@material-ui/core";
import FavoriteRecipe from "./FavoriteRecipe";

function FavoritesList({ favListRef }) {
  const favorites = useSelector((state) => state.favorites);
  return (
    <>
      {favorites.length ? <h1>Favorites</h1> : ""}
      <List ref={favListRef}>
        {favorites.length
          ? favorites.map((recipe) => {
              return (
                <ListItem alignItems="flex-start" divider key={recipe.id}>
                  <FavoriteRecipe recipe={recipe} />
                </ListItem>
              );
            })
          : ""}
      </List>
    </>
  );
}

export default FavoritesList;
