import React from "react";
import { Menu, MenuItem, IconButton } from "@material-ui/core";
import { Close, Facebook, LinkedIn, GitHub } from "@material-ui/icons";

function TopBarMenu({ anchorEl, handleCloseMenu }) {
  return (
    <Menu
      id="menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleCloseMenu}
    >
      <MenuItem onClick={handleCloseMenu}>
        <IconButton color="inherit" rel="noopener" target="_blank">
          <Close />
        </IconButton>
      </MenuItem>
      <MenuItem onClick={handleCloseMenu}>
        <IconButton
          href="https://www.facebook.com/piotr.bator.33/"
          color="inherit"
          rel="noopener"
          target="_blank"
        >
          <Facebook />
        </IconButton>
      </MenuItem>
      <MenuItem onClick={handleCloseMenu}>
        <IconButton
          href="https://www.linkedin.com/in/piotr-b%C4%85tor-b4b95620a/"
          color="inherit"
          rel="noopener"
          target="_blank"
        >
          <LinkedIn />
        </IconButton>
      </MenuItem>
      <MenuItem onClick={handleCloseMenu}>
        <IconButton
          href="https://github.com/mizuris/meal-planner-react"
          color="inherit"
          rel="noopener"
          target="_blank"
        >
          <GitHub />
        </IconButton>
      </MenuItem>
    </Menu>
  );
}

export default TopBarMenu;
