import React, { useState, useRef, useEffect } from "react";
import RecipeHeader from "./RecipeHeader";
import RecipeImage from "./RecipeImage";
import RecipeShare from "./RecipeShare";
import RecipeExpand from "./RecipeExpand";
import RecipeCollapse from "./RecipeCollapse";
import { useSelector } from "react-redux";
import { Card, CardActions, Collapse } from "@material-ui/core";
import RecipeFavoriteButton from "./RecipeFavoriteButton";

function Recipe({ recipe }) {
  const favorites = useSelector((state) => state.favorites);

  const [isFavorite, setIsFavorite] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const wrapper = useRef();

  // Expand handler for recipe details
  const handleExpand = () => {
    setExpanded(!expanded);
  };

  // Checking if recipe is favorite when rendered
  useEffect(() => {
    favorites.includes(recipe) ? setIsFavorite(true) : setIsFavorite(false);
  }, [favorites, recipe]);

  return (
    <Card raised={expanded} style={{ width: "100%" }}>
      <RecipeHeader title={recipe.title} subtitle={recipe.creditsText} />
      <RecipeImage image={recipe.image} />
      <CardActions disableSpacing>
        <RecipeFavoriteButton recipe={recipe} isFavorite={isFavorite} />
        <RecipeShare sourceUrl={recipe.sourceUrl} />
        <RecipeExpand expanded={expanded} handleExpand={handleExpand} />
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
