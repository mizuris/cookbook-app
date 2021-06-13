import React, { useState, useRef, useEffect } from "react";
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
import { Share, ExpandMore } from "@material-ui/icons";
import RecipeFavoriteButton from "./RecipeFavoriteButton";

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

function Recipe({ recipe, favorites }) {
  const classes = useStyles();

  const [isFavorite, setIsFavorite] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const wrapper = useRef();

  // Expand handler for recipe details
  const handleExpand = () => {
    setExpanded(!expanded);
  };

  // Checking if recipe is favorite when rendered
  useEffect(() => {
    const checkIfIsFavorite = (id) => {
      for (let i = 0; favorites.length > 1; i++) {
        if (id === favorites[i].id) {
          return true;
        }
        return false;
      }
    };
    setIsFavorite(checkIfIsFavorite(recipe.id));
  }, [favorites, recipe.id]);

  return (
    <Card className={classes.root}>
      <CardHeader
        title={<h4 className={classes.header}>{recipe.title}</h4>}
        subheader={<h5>{recipe.creditsText}</h5>}
      />
      <CardMedia className={classes.media} image={recipe.image} />
      <CardActions disableSpacing>
        <RecipeFavoriteButton recipe={recipe} isFavorite={isFavorite} />
        <IconButton aria-label="share">
          <Link
            href={recipe.sourceUrl}
            target="_blank"
            rel="noopener"
            color="inherit"
          >
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
          summary={recipe.summary}
          instructions={recipe.analyzedInstructions}
          time={recipe.readyInMinutes}
          likes={recipe.aggregateLikes}
        />
      </Collapse>
    </Card>
  );
}

export default Recipe;
