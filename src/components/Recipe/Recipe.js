import React, { useState } from "react";

function Recipe({ recipe, getRecipeInfo }) {
  const { title, image, id } = recipe;
  const [showInfo, setShowInfo] = useState(false);
  const [recipeInfo, setRecipeInfo] = useState("");

  console.log(getRecipeInfo());

  return (
    <div className="recipe-container">
      <h1 className="recipe-title">{title}</h1>
      <img className="recipe-image" src={image} alt={title} />
      <button
        type="button"
        className="recipe-button btn btn-primary"
        onClick={() => setShowInfo(true)}
      >
        Show ingredients
      </button>
    </div>
  );
}

export default Recipe;
