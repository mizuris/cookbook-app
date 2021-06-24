import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";

function RecipeFavoriteButton({ recipe }) {
  const [isFavorite, setIsFavorite] = useState(null);
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const favoriteCheck = favorites.some((item) => item.id === recipe.id);

  // Checking if item is favorite while rendering
  const handleClick = () => {
    if (favoriteCheck) {
      dispatch({
        type: "REMOVE_FROM_FAVORITES",
        payload: recipe.id,
      });
    } else {
      dispatch({
        type: "ADD_TO_FAVORITES",
        payload: recipe,
      });
    }
  };

  // Setting favorite state to display button color
  useEffect(() => {
    return setIsFavorite(favoriteCheck);
  }, [favoriteCheck]);

  return (
    <IconButton onClick={handleClick} aria-label="add to favorites">
      <FavoriteIcon
        fontSize="small"
        color={isFavorite ? "secondary" : "inherit"}
      />
    </IconButton>
  );
}

export default RecipeFavoriteButton;
