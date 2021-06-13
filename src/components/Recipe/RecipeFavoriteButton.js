import React from "react";
import { useDispatch } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";

function RecipeFavoriteButton({ recipe, isFavorite }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    isFavorite
      ? dispatch({
          type: "REMOVE_FROM_FAVORITES",
          payload: recipe.id,
        })
      : dispatch({
          type: "TOGGLE_FAVORITES",
          payload: recipe,
        });
  };

  return (
    <IconButton onClick={handleClick} aria-label="add to favorites">
      <FavoriteIcon
        color={isFavorite ? "secondary" : "inherit"}
        fontSize="small"
      />
    </IconButton>
  );
}

export default RecipeFavoriteButton;
