import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  spinner: {
    color: "rgb(0, 175, 170)",
  },
}));

function RecipesLoader() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CircularProgress className={classes.spinner} />
    </div>
  );
}

export default RecipesLoader;
