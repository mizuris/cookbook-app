import React, { useState, useEffect } from "react";
import "./App.scss";
import { mealTypes } from "./data/mealTypes";
import axios from "axios";
import RecipesList from "./components/Recipe/RecipesList";

function App() {
  const [recipesList, setRecipesList] = useState([]);
  const [recipe, setRecipe] = useState({
    query: "chicken",
    number: 1,
    type: mealTypes,
  });

  useEffect(() => {
    console.log(recipe);
  }, [recipe]);

  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${recipe.query}&number=${recipe.number}&type=${recipe.type}`;

  const getRecipe = async () => {
    const queryResult = await axios.get(url);
    setRecipesList(queryResult.data.results);
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
          onChange={(e) => setRecipe({ ...recipe, query: e.target.value })}
        />
        <input
          type="number"
          value={recipe.number}
          min="1"
          max="100"
          onChange={(e) => setRecipe({ ...recipe, number: e.target.value })}
        />
        <select>
          {recipe.type.map((type, index) => {
            return (
              <option
                key={index}
                value={type}
                onChange={(e) => setRecipe({ ...recipe, type: e.target.value })}
              >
                {type}
              </option>
            );
          })}
        </select>
        <input type="submit" value="Find recipe" />
      </form>

      {recipesList.length ? (
        <RecipesList recipesList={recipesList} />
      ) : (
        "No recipes"
      )}
    </div>
  );
}

export default App;
