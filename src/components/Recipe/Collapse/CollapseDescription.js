import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  sectionDivider: {
    fontWeight: "bold",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

function CollapseDescription({ summary }) {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.sectionDivider} paragraph>
        Description:
      </Typography>
      <Typography
        paragraph
        variant="body1"
        dangerouslySetInnerHTML={{ __html: summary }}
      ></Typography>
    </>
  );
}

export default CollapseDescription;
