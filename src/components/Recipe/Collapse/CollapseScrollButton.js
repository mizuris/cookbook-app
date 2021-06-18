import React from "react";
import { makeStyles } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { ArrowUpwardRounded } from "@material-ui/icons";

const useStyles = makeStyles(() => ({
  contaier: {
    width: "100%",
    textAlign: "center",
  },
}));

function CollapseScrollButton({ scrollRef }) {
  const classes = useStyles();
  const scrollTop = () =>
    scrollRef.current.scrollIntoView({ behavior: "smooth", block: "center" });

  return (
    <div className={classes.contaier}>
      <IconButton onClick={scrollTop}>
        <ArrowUpwardRounded />
      </IconButton>
    </div>
  );
}

export default CollapseScrollButton;
