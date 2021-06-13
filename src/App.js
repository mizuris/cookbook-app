import React from "react";
import "./App.scss";
import FavoritesList from "./components/Favorites/FavoritesList";
import RecipeGetForm from "./components/RecipeGetForm/RecipeGetForm";
import RecipeList from "./components/RecipeList/RecipeList";
import TopBar from "./components/TopBar/TopBar";

function App() {
  return (
    <div className="App">
      <TopBar />
      <div className="App-container">
        <RecipeGetForm />
        <main className="App-content">
          <RecipeList />
          <FavoritesList />
        </main>
      </div>
    </div>
  );
}

export default App;
