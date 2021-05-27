import React, { useEffect, useState } from "react";

function Recipe({ recipe }) {
  const { title, image, id } = recipe;
  const [recipeDetails, setRecipeDetails] = useState(null);

  useEffect(() => {
    const getRecipeId = async () => {
      const recipeDetailsResult = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
      );
      recipeDetailsResult.json().then((data) => setRecipeDetails(data));
    };
    getRecipeId();
  }, [id]);

  return (
    <div>
      <img src={image} alt={title} />
      <p>{title}</p>
      {recipeDetails ? (
        <>
          <p>{recipeDetails.readyInMinutes} - minutes</p>
          <p>{recipeDetails.sourceUrl} - url</p>
          <p>{recipeDetails.summary} - summary</p>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default Recipe;
