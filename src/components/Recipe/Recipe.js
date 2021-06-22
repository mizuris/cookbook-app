import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Card, CardActions, Collapse } from "@material-ui/core";
import RecipeHeader from "./RecipeHeader";
import RecipeImage from "./RecipeImage";
import RecipeFavoriteButton from "./Buttons/RecipeFavoriteButton";
import RecipeShareButton from "./Buttons/RecipeShareButton";
import RecipeExpandButton from "./Buttons/RecipeExpandButton";
import RecipeCollapse from "./Collapse/RecipeCollapse";
import RecipeCloseButton from "./Buttons/RecipeCloseButton";

function Recipe({ recipe }) {
  const favorites = useSelector((state) => state.favorites);
  const scrollRef = useRef();

  const [isFavorite, setIsFavorite] = useState(false);
  const [expanded, setExpanded] = useState(false);

  // Expand handler for recipe details
  const handleExpand = () => {
    setExpanded(!expanded);
  };

  // Checking if recipe is favorite when rendered
  useEffect(() => {
    favorites.includes(recipe) ? setIsFavorite(true) : setIsFavorite(false);
  }, [favorites, recipe]);

  return (
    <>
      <div ref={scrollRef}></div>
      <Card style={{ position: "relative" }} raised={expanded}>
        <RecipeHeader title={recipe.title} subtitle={recipe.creditsText} />
        <RecipeCloseButton id={recipe.id} />
        <RecipeImage image={recipe.image} />
        <CardActions disableSpacing>
          <RecipeFavoriteButton recipe={recipe} isFavorite={isFavorite} />
          <RecipeShareButton sourceUrl={recipe.sourceUrl} />
          <RecipeExpandButton expanded={expanded} handleExpand={handleExpand} />
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <RecipeCollapse
            closeCollapse={handleExpand}
            scrollRef={scrollRef}
            summary={recipe.summary}
            instructions={recipe.analyzedInstructions}
            time={recipe.readyInMinutes}
            likes={recipe.aggregateLikes}
          />
        </Collapse>
      </Card>
    </>
  );
}

export default Recipe;
