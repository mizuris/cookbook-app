import React, { useState } from "react";
import { makeStyles, AppBar, Toolbar, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import TopBarMenu from "./TopBarMenu";
import TopBarLogo from "./TopBarLogo";
import TopBarFab from "./TopBarFab";

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
        <TopBarFab scrollFavs={scrollFavs} />
        <div className={classes.grow} />
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          aria-haspopup="true"
          onClick={handleOpenMenu}
        >
          <MoreVertIcon />
        </IconButton>
        <TopBarMenu anchorEl={anchorEl} handleCloseMenu={handleCloseMenu} />
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
