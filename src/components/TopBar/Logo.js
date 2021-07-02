import React from "react";
import IconButton from "@material-ui/core/IconButton";
import logo_white_mobile from "../../assets/icon/cookbook_icon_white.png";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

function Logo() {
  return (
    <Link to="app" smooth={true}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        <IconButton>
          <img
            style={{ maxHeight: 40 }}
            src={logo_white_mobile}
            alt="cookbook logo"
          />
        </IconButton>
      </motion.div>
    </Link>
  );
}

export default Logo;
