import React from "react";
import { makeStyles, CardHeader } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1),
    fontFamily: "Montserrat",
  },
}));

function Title({ title }) {
  const classes = useStyles();
  return <CardHeader title={<h6 className={classes.header}>{title}</h6>} />;
}

export default Title;
