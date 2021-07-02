import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  list: {
    padding: theme.spacing(1),
  },
  listBlock: {
    marginBottom: theme.spacing(1),
    fontSize: "0.8rem",
  },
}));

function Instructions({ instructions }) {
  const classes = useStyles();
  return (
    <ol className={classes.list}>
      {instructions.length
        ? instructions[0].steps.map((step) => {
            return (
              <li className={classes.listBlock} key={step.number}>
                {step.step}
              </li>
            );
          })
        : ""}
    </ol>
  );
}

export default Instructions;
