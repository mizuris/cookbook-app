import React from "react";
import "./App.scss";
import FavoritesList from "./components/Favorites/FavoritesList";
import RecipeGetForm from "./components/RecipeGetForm/RecipeGetForm";
import RecipeList from "./components/RecipeList/RecipeList";

function App() {
  return (
    <main className="App">
      <div className="App-container">
        <FavoritesList />
        <RecipeGetForm />
        <RecipeList />
      </div>
    </main>
  );
}

export default App;
