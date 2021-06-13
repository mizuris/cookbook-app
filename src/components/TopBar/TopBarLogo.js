import React from "react";
import IconButton from "@material-ui/core/IconButton";
import logo_white from "../../assets/logo/cookbook_logo_horizontal_white.png";

function TopBarLogo() {
  return (
    <IconButton>
      <img style={{ maxHeight: 40 }} src={logo_white} alt="cookbook logo" />
    </IconButton>
  );
}

export default TopBarLogo;
