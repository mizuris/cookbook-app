import React, { useState } from "react";

function RecipeGetForm({ getRecipeCallback }) {
  const [queryText, setQueryText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await getRecipe();
    setQueryText("");
  };

  const getRecipe = async () => {
    const queryResult = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${queryText}&number=3`
    );
    if (queryResult) {
      queryResult
        .json()
        .then((data) => getRecipeCallback(data.results))
        .catch((err) => console.log(err));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={queryText}
        onChange={(e) => setQueryText(e.target.value)}
      />
      <input type="submit" value="Get recipes" />
    </form>
  );
}

export default RecipeGetForm;
