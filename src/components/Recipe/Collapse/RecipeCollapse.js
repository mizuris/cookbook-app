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
import Instructions from "./Instructions";
import Description from "./Description";
import ScrollButton from "../Buttons/ScrollButton";
import DietsInfo from "./DietsInfo";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  actionField: {
    justifyContent: "flex-end",
  },
}));

function RecipeCollapse({ recipe, scrollRef, closeCollapse }) {
  const classes = useStyles();
  const { time, likes, summary, analyzedInstructions } = recipe;

  return (
    <CardContent>
      <DietsInfo recipe={recipe} />
      <CardActions className={classes.actionField}>
        <IconButton disabled aria-label="time to preapre deal">
          <AccessTime className={classes.icon} fontSize="small" /> {time}
        </IconButton>
        <IconButton disabled aria-label="share">
          <ThumbUp className={classes.icon} fontSize="small" /> {likes}
        </IconButton>
      </CardActions>
      <Description summary={summary} />
      <Divider />
      <Typography className={classes.sectionDivider}>Preparation:</Typography>
      <Instructions instructions={analyzedInstructions} />
      <ScrollButton scrollRef={scrollRef} closeCollapse={closeCollapse} />
    </CardContent>
  );
}

export default RecipeCollapse;
