import React from "react";
import { makeStyles } from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";

const useStyles = makeStyles((theme) => ({
  header: {
    marginTop: theme.spacing(1),
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
