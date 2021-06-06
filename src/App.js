import React, { useState } from "react";
import "./App.scss";
import FavoritesModule from "./components/FavoritesList/FavoritesModule";
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
      <FavoritesModule />
    </div>
  );
}

export default App;
