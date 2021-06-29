import React from "react";
import { makeStyles, Fab } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { motion } from "framer-motion";

const useStyles = makeStyles(() => ({
  fabButton: {
    position: "absolute",
    zIndex: 1,
    bottom: -15,
    left: 0,
    right: 0,
    margin: "0 auto",
  },
}));

function FavButton({ scrollFavs }) {
  const classes = useStyles();
  return (
    <Fab
      component={motion.button}
      initial={{ scale: 0 }}
      animate={{ scale: 1, rotate: 720 }}
      transition={{ duration: 1 }}
      size="medium"
      color="secondary"
      aria-label="add"
      className={classes.fabButton}
      onClick={scrollFavs}
    >
      <FavoriteIcon />
    </Fab>
  );
}

export default FavButton;
