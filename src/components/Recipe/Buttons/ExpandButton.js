import React from "react";
import clsx from "clsx";
import { makeStyles, IconButton } from "@material-ui/core/";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

function ExpandButton({ expanded, handleExpand }) {
  const classes = useStyles();
  return (
    <IconButton
      className={clsx(classes.expand, {
        [classes.expandOpen]: expanded,
      })}
      onClick={handleExpand}
      aria-expanded={expanded}
      aria-label="show more"
    >
      <ExpandMoreIcon />
    </IconButton>
  );
}

export default ExpandButton;
