import React, { useRef } from "react";
import "./App.css";
import FavoritesList from "./components/Favorites/FavoritesList";
import RecipeGetForm from "./components/RecipeGetForm/RecipeGetForm";
import RecipeList from "./components/Recipe/RecipeList";
import TopBar from "./components/TopBar/TopBar";

function App() {
  const topRef = useRef(null);
  const scrollTop = () =>
    topRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

  // Scroll to favorites when clicking TopBar Favorite Fab
  const favListRef = useRef(null);
  const scrollIntoFavs = () =>
    favListRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

  return (
    <div className="App" ref={topRef}>
      <TopBar
        scrollIntoFavs={scrollIntoFavs}
        scrollTop={scrollTop}
      />
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
