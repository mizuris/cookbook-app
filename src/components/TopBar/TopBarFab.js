import React from "react";
import { makeStyles } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import FavoriteIcon from "@material-ui/icons/Favorite";

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

function TopBarFab({ scrollFavs }) {
  const classes = useStyles();
  return (
    <Fab
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

export default TopBarFab;
