import React from "react";
import IconButton from "@material-ui/core/IconButton";
import logo_white_mobile from "../../assets/icon/cookbook_icon_white.png";
import { motion } from "framer-motion";
import { animateScroll as scroll } from "react-scroll";

function Logo() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1 }}
    >
      <IconButton onClick={() => scroll.scrollToTop()}>
        <img
          style={{ maxHeight: 40 }}
          src={logo_white_mobile}
          alt="cookbook logo"
        />
      </IconButton>
    </motion.div>
  );
}

export default Logo;
