import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Fab, IconButton } from "@material-ui/core";
import { Favorite, MoreVert } from "@material-ui/icons";
import TopBarMenu from "./TopBarMenu";
import logo_white_horiz from "../../assets/icon/cookbook_icon_white.png";

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
  logo: {
    maxHeight: 60,
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

function TopBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (e) => setAnchorEl(e.target);
  const handleCloseMenu = () => setAnchorEl(null);

  return (
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <IconButton>
          <img
            className={classes.logo}
            src={logo_white_horiz}
            alt="cookbook logo"
          />
        </IconButton>
        <Fab color="secondary" aria-label="add" className={classes.fabButton}>
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
