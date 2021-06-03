import React, { useState, useRef } from "react";
import RecipeCollapse from "./RecipeCollapse";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  IconButton,
  Collapse,
  Link,
} from "@material-ui/core";
import { Favorite, Share, ExpandMore } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  header: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
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
  const wrapper = useRef();
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const {
    title,
    image,
    sourceUrl,
    creditsText,
    analyzedInstructions,
    summary,
    readyInMinutes,
    aggregateLikes,
  } = recipe;
  console.log(recipe);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  console.log(analyzedInstructions);

  return (
    <Card className={classes.root}>
      <CardHeader
        title={<h4 className={classes.header}>{title}</h4>}
        subheader={<h5>{creditsText}</h5>}
      />
      <CardMedia className={classes.media} image={image} />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Favorite fontSize="small" />
        </IconButton>
        <IconButton aria-label="share">
          <Link href={sourceUrl} target="_blank" rel="noopener" color="inherit">
            <Share fontSize="small" />
          </Link>
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpand}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMore />
        </IconButton>
      </CardActions>
      <Collapse ref={wrapper} in={expanded} timeout="auto" unmountOnExit>
        <RecipeCollapse
          summary={summary}
          instructions={analyzedInstructions}
          time={readyInMinutes}
          likes={aggregateLikes}
        />
      </Collapse>
    </Card>
  );
}

export default Recipe;
