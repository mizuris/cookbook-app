import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  sectionDivider: {
    fontWeight: "bold",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  description: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "0.8rem",
  },
}));

function CollapseDescription({ summary }) {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.sectionDivider}>Description:</Typography>
      <Typography
        className={classes.description}
        paragraph
        variant="body1"
        dangerouslySetInnerHTML={{ __html: summary }}
      ></Typography>
    </>
  );
}

export default CollapseDescription;
