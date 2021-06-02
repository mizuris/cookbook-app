import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
  Collapse,
} from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

function Recipe({ recipe }) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const {
    title,
    image,
    sourceUrl,
    readyInMinutes,
    creditsText,
    analyzedInstructions,
  } = recipe;
  console.log(recipe);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  console.log(analyzedInstructions);

  return (
    <Card className={classes.root}>
      <CardHeader
        title={title}
        subheader={creditsText}
        action={
          <IconButton>
            <AccessTimeIcon /> {readyInMinutes}
          </IconButton>
        }
      />
      <CardMedia className={classes.media} image={image} />
      <CardContent>
        <Typography paragraph>Some text to be displayed</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <a href={sourceUrl}>
            <ShareIcon />
          </a>
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpand}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Preparation:</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default Recipe;
