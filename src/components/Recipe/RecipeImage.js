import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
}));

function RecipeImage({ image }) {
  const classes = useStyles();
  return <CardMedia className={classes.media} image={image} />;
}

export default RecipeImage;
