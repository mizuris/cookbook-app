import React from "react";
import { makeStyles, CardMedia } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
}));

function Image({ image }) {
  const classes = useStyles();
  return <CardMedia className={classes.media} image={image} />;
}

export default Image;
