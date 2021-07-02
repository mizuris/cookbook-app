import React from "react";
import { makeStyles, Chip } from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    background:
      "linear-gradient(90deg, rgb(0,175,170) 0%, rgb(0,130,160) 100%)",
  },
}));

function CustomChip(props) {
  const classes = useStyles();

  return (
    <Chip
      className={classes.root}
      label={props.label}
      size="small"
      icon={props.type ? <DoneIcon /> : <ClearIcon />}
      color="primary"
      clickable={props.type}
      disabled={!props.type}
    />
  );
}

export default CustomChip;
