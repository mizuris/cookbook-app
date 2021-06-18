import React from "react";
import { makeStyles } from "@material-ui/core";
import { motion } from "framer-motion";

const useStyles = makeStyles(() => ({
  sectionHeader: {
    margin: `3rem auto 2rem`,
  },
}));

function SectionHeader({ dependencyArray, text }) {
  const classes = useStyles();
  if (dependencyArray && dependencyArray.length) {
    return (
      <motion.h1
        className={classes.sectionHeader}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {text}
      </motion.h1>
    );
  }
  return null;
}

export default SectionHeader;
