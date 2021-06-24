import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core";
import { motion } from "framer-motion";

const useStyles = makeStyles(() => ({
  sectionHeader: {
    margin: `3rem auto 2rem`,
  },
}));

function SectionHeader({ text, control }) {
  const classes = useStyles();
  const recipes = useSelector((state) => state.recipes);
  const favorites = useSelector((state) => state.favorites);

  control === "recipes" ? (control = recipes) : (control = favorites);

  if (control && control.length) {
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
