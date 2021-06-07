import React from "react";
import { useDispatch } from "react-redux";
import {
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Avatar,
} from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";
import DeleteIcon from "@material-ui/icons/Delete";

function FavoriteRecipe({ recipe }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch({
      type: "REMOVE_FROM_FAVORITES",
      payload: recipe.id,
    });
  };

  return (
    <>
      <ListItemAvatar>
        <Avatar src={recipe.image} alt={recipe.title} />
      </ListItemAvatar>
      <ListItemText primary={recipe.title} secondary={recipe.creditsText} />
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          aria-label="share"
          href={recipe.sourceUrl}
          target="_blank"
          rel="noopener"
        >
          <ShareIcon />
        </IconButton>
        <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </>
  );
}

export default FavoriteRecipe;
