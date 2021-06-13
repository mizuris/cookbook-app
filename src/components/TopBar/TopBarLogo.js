import React, { useEffect, useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import logo_white_wide from "../../assets/logo/cookbook_logo_horizontal_white.png";
import logo_white_mobile from "../../assets/icon/cookbook_icon_white.png";

function TopBarLogo() {
  const windowWidth = window.innerWidth;
  const [width, setWidth] = useState(windowWidth);

  // Function changing logo display depending on window widht
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(windowWidth));
  }, [windowWidth]);

  return (
    <IconButton>
      <img
        style={{ maxHeight: 40 }}
        src={width > 350 ? logo_white_wide : logo_white_mobile}
        alt="cookbook logo"
      />
    </IconButton>
  );
}

export default TopBarLogo;
