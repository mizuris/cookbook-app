import React, { useState, useEffect, useRef } from "react";
import "./App.scss";
import FavoritesList from "./components/Favorites/FavoritesList";
import RecipeGetForm from "./components/RecipeGetForm/RecipeGetForm";
import RecipeList from "./components/Recipe/RecipeList";
import TopBar from "./components/TopBar/TopBar";

function App() {
  const windowWidth = window.innerWidth;
  const [width, setWidth] = useState(windowWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(windowWidth));
  }, [windowWidth]);

  const favListRef = useRef(null);
  const scrollIntoFavs = () =>
    favListRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

  return (
    <div className="App">
      <TopBar scrollIntoFavs={scrollIntoFavs} windowWidth={width} />
      <div className="App-container">
        <RecipeGetForm />
        <main className="App-content">
          <RecipeList />
          <FavoritesList favListRef={favListRef} windowWidth={width} />
        </main>
      </div>
    </div>
  );
}

export default App;
