import React from "react";
import { makeStyles, Typography, IconButton } from "@material-ui/core";
import { ArrowUpwardRounded } from "@material-ui/icons";
import { Link } from "react-scroll";

const useStyles = makeStyles(() => ({
  container: {
    width: "100%",
    textAlign: "center",
  },
}));

function ScrollButton({ closeCollapse, id }) {
  const classes = useStyles();

  return (
    <Link to={id} smooth={true}>
      <div className={classes.container}>
        <IconButton size="medium" onClick={closeCollapse}>
          <Typography variant="button">Back to top</Typography>
          <ArrowUpwardRounded />
        </IconButton>
      </div>
    </Link>
  );
}

export default ScrollButton;
