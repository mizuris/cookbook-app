import React from "react";
import { useDispatch } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";

function RecipeFavoriteButton({ recipe }) {
  const dispatch = useDispatch();
  const handleClick = () =>
    dispatch({
      type: "TOGGLE_FAVORITES",
      payload: recipe,
    });

  return (
    <IconButton onClick={handleClick} aria-label="add to favorites">
      <FavoriteIcon fontSize="small" />
    </IconButton>
  );
}

export default RecipeFavoriteButton;
