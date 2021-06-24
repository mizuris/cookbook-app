import React from "react";
import { makeStyles, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch } from "react-redux";

const useStyles = makeStyles(() => ({
  closeButton: {
    position: "absolute",
    top: 0,
    right: 0,
  },
}));

function RecipeCloseButton({ id }) {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <IconButton
      className={classes.closeButton}
      onClick={() =>
        dispatch({
          type: "REJECT_RECIPE",
          payload: id,
        })
      }
    >
      <CloseIcon />
    </IconButton>
  );
}

export default RecipeCloseButton;
