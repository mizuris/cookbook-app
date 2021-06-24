import React from "react";
import { makeStyles, CardHeader } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1),
  },
}));

function RecipeHeader({ title, subtitle }) {
  const classes = useStyles();
  return (
    <CardHeader
      title={<h4 className={classes.header}>{title}</h4>}
      subheader={<h5>{subtitle}</h5>}
    />
  );
}

export default RecipeHeader;
