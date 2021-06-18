import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Fab, IconButton } from "@material-ui/core";
import { Favorite, MoreVert } from "@material-ui/icons";
import TopBarMenu from "./TopBarMenu";
import TopBarLogo from "./TopBarLogo";

const useStyles = makeStyles(() => ({
  appBar: {
    bottom: "auto",
    top: 0,
    background:
      "linear-gradient(90deg, rgb(0,175,170) 0%, rgb(0,130,160) 100%)",
  },
  toolbar: {
    width: "90%",
    margin: "0 auto",
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    bottom: -15,
    left: 0,
    right: 0,
    margin: "0 auto",
  },
  grow: {
    flexGrow: 1,
  },
}));

function TopBar({ scrollTopRef, scrollFavsRef }) {
  const classes = useStyles();

  // State and functions for menu component
  const [anchorEl, setAnchorEl] = useState(null);
  const handleOpenMenu = (e) => setAnchorEl(e.target);
  const handleCloseMenu = () => setAnchorEl(null);

  const scrollTarget = (ref, blockPosition) =>
    ref.current.scrollIntoView({ behavior: "smooth", block: blockPosition });

  const scrollTop = () => scrollTarget(scrollTopRef, "start");

  const scrollFavs = () => scrollTarget(scrollFavsRef, "center");

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <TopBarLogo scrollTop={scrollTop} />
        <Fab
          size="medium"
          color="secondary"
          aria-label="add"
          className={classes.fabButton}
          onClick={scrollFavs}
        >
          <Favorite />
        </Fab>
        <div className={classes.grow} />
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          aria-haspopup="true"
          onClick={handleOpenMenu}
        >
          <MoreVert />
        </IconButton>
        <TopBarMenu anchorEl={anchorEl} handleCloseMenu={handleCloseMenu} />
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
