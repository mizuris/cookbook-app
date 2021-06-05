import React, { useState } from "react";
import "./App.scss";
import RecipeGetForm from "./components/RecipeGetForm/RecipeGetForm";
import RecipeList from "./components/RecipeList/RecipeList";

function App() {
  const [recipes, setRecipes] = useState([]);
  const getRecipeCallback = (recipeQueryResult) => {
    setRecipes(recipeQueryResult);
  };

  return (
    <div className="App">
      <RecipeGetForm getRecipeCallback={getRecipeCallback} />
      <RecipeList recipes={recipes} />
      {/* <FavoritesList /> */}
    </div>
  );
}

export default App;
