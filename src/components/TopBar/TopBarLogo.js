import React from "react";
import IconButton from "@material-ui/core/IconButton";
import logo_white_mobile from "../../assets/icon/cookbook_icon_white.png";

function TopBarLogo({ handleScroll }) {
  return (
    <IconButton onClick={handleScroll}>
      <img
        style={{ maxHeight: 40 }}
        src={logo_white_mobile}
        alt="cookbook logo"
      />
    </IconButton>
  );
}

export default TopBarLogo;
