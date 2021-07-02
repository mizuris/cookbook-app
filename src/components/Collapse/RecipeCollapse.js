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
    marginRight: theme.spacing(1),
    maxWidth: 16,
  },
  actionField: {
    justifyContent: "flex-end",
  },
  sectionDivider: {
    fontWeight: "bold",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

function RecipeCollapse({ recipe, closeCollapse }) {
  const classes = useStyles();
  const { readyInMinutes, aggregateLikes, summary, analyzedInstructions } =
    recipe;

  return (
    <CardContent>
      <CardActions className={classes.actionField}>
        <IconButton size="small" aria-label="time to preapre deal">
          <AccessTime className={classes.icon} fontSize="small" />{" "}
          {readyInMinutes}
        </IconButton>
        <IconButton size="small" aria-label="share">
          <ThumbUp className={classes.icon} fontSize="small" /> {aggregateLikes}
        </IconButton>
      </CardActions>
      <DietsInfo recipe={recipe} />
      <Description summary={summary} />
      <Divider />
      <Typography className={classes.sectionDivider}>Preparation:</Typography>
      <Instructions instructions={analyzedInstructions} />
      <ScrollButton id={recipe.id} closeCollapse={closeCollapse} />
    </CardContent>
  );
}

export default RecipeCollapse;
