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

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  actionField: {
    justifyContent: "flex-end",
  },
  sectionDivider: {
    fontWeight: "bold",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  list: {
    padding: theme.spacing(1),
  },
}));

function RecipeCollapse({ summary, instructions, time, likes }) {
  const classes = useStyles();
  return (
    <CardContent>
      <CardActions className={classes.actionField}>
        <IconButton aria-label="time to preapre deal">
          <AccessTime className={classes.icon} fontSize="small" /> {time}
        </IconButton>
        <IconButton aria-label="share">
          <ThumbUp className={classes.icon} fontSize="small" /> {likes}
        </IconButton>
      </CardActions>
      <Typography className={classes.sectionDivider} paragraph>
        Description:
      </Typography>
      <Typography
        paragraph
        variant="body1"
        dangerouslySetInnerHTML={{ __html: summary }}
      ></Typography>
      <Divider />
      <Typography className={classes.sectionDivider} paragraph>
        Preparation:
      </Typography>
      <ol className={classes.list}>
        {instructions[0].steps.map((step) => {
          return (
            <li className={classes.listBlock} key={step.number}>
              {step.step}
            </li>
          );
        })}
      </ol>
    </CardContent>
  );
}

export default RecipeCollapse;
