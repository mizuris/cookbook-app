import React, { useRef } from "react";
import "./App.scss";
import FavoritesList from "./components/Favorites/FavoritesList";
import RecipeGetForm from "./components/RecipeGetForm/RecipeGetForm";
import RecipeList from "./components/RecipeList/RecipeList";
import TopBar from "./components/TopBar/TopBar";

function App() {
  const favListRef = useRef(null);
  const scrollIntoFavs = () =>
    favListRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

  return (
    <div className="App">
      <TopBar scrollIntoFavs={scrollIntoFavs} />
      <div className="App-container">
        <RecipeGetForm />
        <main className="App-content">
          <RecipeList />
          <FavoritesList favListRef={favListRef} />
        </main>
      </div>
    </div>
  );
}

export default App;
