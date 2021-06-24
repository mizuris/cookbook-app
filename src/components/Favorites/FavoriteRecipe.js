import React from "react";
import { useDispatch } from "react-redux";
import {
  makeStyles,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Avatar,
} from "@material-ui/core";
import { Delete, Share } from "@material-ui/icons";

const useStyles = makeStyles(() => ({
  text: {
    maxWidth: "40%",
  },
  icon: {
    color: "inherit",
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
        secondary={recipe.sourceName}
      />
      <ListItemSecondaryAction>
        <IconButton href={recipe.sourceUrl} rel="noopener" target="_blank">
          <Share className={classes.icon} />
        </IconButton>
        <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
          <Delete className={classes.icon} />
        </IconButton>
      </ListItemSecondaryAction>
    </>
  );
}

export default FavoriteRecipe;
