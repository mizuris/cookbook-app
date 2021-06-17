import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  CardContent,
  CardActions,
  Typography,
  Divider,
  IconButton,
} from "@material-ui/core";
import { AccessTime, ThumbUp } from "@material-ui/icons";
import CollapseList from "./CollapseList";
import CollapseDescription from "./CollapseDescription";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  actionField: {
    justifyContent: "flex-end",
  },
}));

function RecipeCollapse({ summary, instructions, time, likes }) {
  const classes = useStyles();
  return (
    <CardContent>
      <CardActions className={classes.actionField}>
        <IconButton disabled aria-label="time to preapre deal">
          <AccessTime className={classes.icon} fontSize="small" /> {time}
        </IconButton>
        <IconButton disabled aria-label="share">
          <ThumbUp className={classes.icon} fontSize="small" /> {likes}
        </IconButton>
      </CardActions>
      <CollapseDescription summary={summary} />
      <Divider />
      <Typography className={classes.sectionDivider}>
        Preparation:
      </Typography>
      <CollapseList instructions={instructions} />
    </CardContent>
  );
}

export default RecipeCollapse;
