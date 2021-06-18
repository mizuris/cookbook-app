import React, { useState, useEffect, useRef } from "react";
import RecipeHeader from "./RecipeHeader";
import RecipeImage from "./RecipeImage";
import RecipeFavoriteButton from "./Buttons/RecipeFavoriteButton";
import RecipeShareButton from "./Buttons/RecipeShareButton";
import RecipeExpandButton from "./Buttons/RecipeExpandButton";
import RecipeCollapse from "./Collapse/RecipeCollapse";
import { useSelector } from "react-redux";
import { Card, CardActions, Collapse } from "@material-ui/core";
import { motion } from "framer-motion";
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
    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
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
            scrollRef={scrollRef}
            summary={recipe.summary}
            instructions={recipe.analyzedInstructions}
            time={recipe.readyInMinutes}
            likes={recipe.aggregateLikes}
          />
        </Collapse>
      </Card>
    </motion.div>
  );
}

export default Recipe;
