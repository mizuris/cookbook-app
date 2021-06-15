import React from "react";
import Menu from "@material-ui/core/Menu";
import { Close, Facebook, LinkedIn, GitHub } from "@material-ui/icons";
import TopBarMenuIcon from "./TopBarMenuIcon";

function TopBarMenu({ anchorEl, handleCloseMenu }) {
  return (
    <Menu
      id="menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleCloseMenu}
    >
      <TopBarMenuIcon handleCloseMenu={handleCloseMenu}>
        <Close />
      </TopBarMenuIcon>
      <TopBarMenuIcon
        href="https://www.facebook.com/piotr.bator.33/"
        handleCloseMenu={handleCloseMenu}
      >
        <Facebook />
      </TopBarMenuIcon>
      <TopBarMenuIcon
        href="https://www.linkedin.com/in/piotr-b%C4%85tor-b4b95620a/"
        handleCloseMenu={handleCloseMenu}
      >
        <LinkedIn />
      </TopBarMenuIcon>
      <TopBarMenuIcon
        href="https://github.com/mizuris/meal-planner-react"
        handleCloseMenu={handleCloseMenu}
      >
        <GitHub />
      </TopBarMenuIcon>
    </Menu>
  );
}

export default TopBarMenu;
