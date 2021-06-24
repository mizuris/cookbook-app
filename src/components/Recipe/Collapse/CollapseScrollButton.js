import React from "react";
import { makeStyles, Typography, IconButton } from "@material-ui/core";
import { ArrowUpwardRounded } from "@material-ui/icons";

const useStyles = makeStyles(() => ({
  container: {
    width: "100%",
    textAlign: "center",
  },
}));

function CollapseScrollButton({ scrollRef, closeCollapse }) {
  const classes = useStyles();
  const scrollTop = () =>
    scrollRef.current.scrollIntoView({ behavior: "smooth", block: "center" });

  return (
    <div className={classes.container}>
      <IconButton
        size="small"
        onClick={() => {
          scrollTop();
          closeCollapse();
        }}
      >
        <Typography variant="button">Back to top</Typography>
        <ArrowUpwardRounded />
      </IconButton>
    </div>
  );
}

export default CollapseScrollButton;
