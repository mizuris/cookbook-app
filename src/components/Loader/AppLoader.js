import React from "react";
import { makeStyles } from "@material-ui/core";
import cookbook_logo from "../../assets/icon/cookbook_icon_white.png";
import { motion } from "framer-motion";

const useStyles = makeStyles(() => ({
  appLoader: {
    width: "100%",
    minHeight: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgb(0, 175, 170)",
  },
  logo: {
    maxWidth: 200,
  },
}));

function AppLoader() {
  const classes = useStyles();
  return (
    <motion.div
      transition={{ delay: 3 }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      className={classes.appLoader}
    >
      <motion.img
        animate={{ scale: [1, 1.5, 1.5, 1, 1], rotate: [0, 0, 360, 360, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
        className={classes.logo}
        src={cookbook_logo}
        alt="app logo"
      />
    </motion.div>
  );
}

export default AppLoader;
