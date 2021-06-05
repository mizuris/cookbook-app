import React from "react";
import { useDispatch } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import { Favorite } from "@material-ui/icons";

function RecipeFavoriteButton({ recipe }) {
  const dispatch = useDispatch();
  const handleClick = () =>
    dispatch({
      type: "ADD_TO_FAVORITES",
      payload: recipe,
    });

  return (
    <IconButton onClick={handleClick} aria-label="add to favorites">
      <Favorite fontSize="small" />
    </IconButton>
  );
}

export default RecipeFavoriteButton;
