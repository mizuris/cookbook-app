import React, { useState } from "react";
import "./App.scss";
import axios from "axios";
import RecipesList from "./components/Recipe/RecipesList";

function App() {
  const [recipeList, setRecipeList] = useState([]);
  const [recipe, setRecipe] = useState({
    query: "chicken",
    number: 1,
  });

  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${recipe.query}&number=${recipe.number}`;

  const getRecipe = async () => {
    if (recipe.query !== "") {
      const queryResult = await axios.get(url);
      setRecipeList(queryResult.data.results);
    }
  };

  return (
    <div className="App">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          getRecipe();
        }}
      >
        <input
          type="text"
          value={recipe.query}
          placeholder="Search recipe"
          onChange={(e) => setRecipe({ ...recipe, query: e.target.value })}
        />
        <input
          type="number"
          value={recipe.number}
          min="1"
          max="100"
          onChange={(e) => setRecipe({ ...recipe, number: e.target.value })}
        />
        <input type="submit" value="Find recipe" />
      </form>

      {recipeList.length ? <RecipesList recipeList={recipeList} /> : ""}
    </div>
  );
}

export default App;
