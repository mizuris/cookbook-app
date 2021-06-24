import React from "react";
import {
  makeStyles,
  CardContent,
  CardActions,
  Typography,
  Divider,
  IconButton,
} from "@material-ui/core";
import { AccessTime, ThumbUp } from "@material-ui/icons";
import CollapseList from "./CollapseList";
import CollapseDescription from "./CollapseDescription";
import CollapseScrollButton from "./CollapseScrollButton";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  actionField: {
    justifyContent: "flex-end",
  },
}));

function RecipeCollapse(props) {
  const classes = useStyles();

  return (
    <CardContent>
      <CardActions className={classes.actionField}>
        <IconButton disabled aria-label="time to preapre deal">
          <AccessTime className={classes.icon} fontSize="small" /> {props.time}
        </IconButton>
        <IconButton disabled aria-label="share">
          <ThumbUp className={classes.icon} fontSize="small" /> {props.likes}
        </IconButton>
      </CardActions>
      <CollapseDescription summary={props.summary} />
      <Divider />
      <Typography className={classes.sectionDivider}>Preparation:</Typography>
      <CollapseList instructions={props.instructions} />
      <CollapseScrollButton
        scrollRef={props.scrollRef}
        closeCollapse={props.closeCollapse}
      />
    </CardContent>
  );
}

export default RecipeCollapse;
