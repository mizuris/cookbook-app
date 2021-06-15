import React from "react";
import { MenuItem, IconButton } from "@material-ui/core";

function TopBarMenuIcon(props) {
  return (
    <MenuItem onClick={props.handleCloseMenu}>
      <IconButton
        color="inherit"
        href={props.href || ""}
        rel="noopener"
        target="_blank"
      >
        {props.children}
      </IconButton>
    </MenuItem>
  );
}

export default TopBarMenuIcon;
