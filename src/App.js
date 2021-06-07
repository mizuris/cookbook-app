import React from "react";
import "./App.scss";
import FavoritesList from "./components/Favorites/FavoritesList";
import RecipeGetForm from "./components/RecipeGetForm/RecipeGetForm";
import RecipeList from "./components/RecipeList/RecipeList";

function App() {
  return (
    <div className="App">
      <FavoritesList />
      <main className="App-container">
        <RecipeGetForm />
        <RecipeList />
      </main>
    </div>
  );
}

export default App;
