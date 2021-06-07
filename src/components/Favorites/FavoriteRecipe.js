import React from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Avatar,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles(() => ({
  text: {
    maxWidth: "40%",
  },
}));

function FavoriteRecipe({ recipe }) {
  const classes = useStyles();
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
      <ListItemText
        className={classes.text}
        primary={recipe.title}
        secondary={recipe.creditsText}
      />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </>
  );
}

export default FavoriteRecipe;
