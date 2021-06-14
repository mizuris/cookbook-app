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
        windowWidth={width}
      />
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
