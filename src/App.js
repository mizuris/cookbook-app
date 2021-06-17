import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import FavoritesList from "./components/Favorites/FavoritesList";
import RecipeGetForm from "./components/RecipeGetForm/RecipeGetForm";
import RecipeList from "./components/Recipe/RecipeList";
import TopBar from "./components/TopBar/TopBar";
import RecipesLoader from "./components/Loader/RecipesLoader";
import AppLoader from "./components/Loader/AppLoader";

function App() {
  const topRef = useRef(null);
  const favListRef = useRef(null);

  // Loading screen
  const [loadingScreen, setLoadingScreen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoadingScreen(false);
    }, 3500);
  }, [loadingScreen]);

  const [isLoading, setIsLoading] = useState(false);
  const changeLoadingState = (status) => setIsLoading(status);

  // Scroll to top when clicking Logo
  const scrollTop = () =>
    topRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

  // Scroll to favorites when clicking TopBar Favorite Fab
  const scrollIntoFavs = () =>
    favListRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

  return loadingScreen ? (
    <AppLoader loadingScreen={loadingScreen} />
  ) : (
    <div className="App" ref={topRef}>
      <TopBar scrollIntoFavs={scrollIntoFavs} scrollTop={scrollTop} />
      <div className="App-container">
        <RecipeGetForm changeLoadingState={changeLoadingState} />
        <main className="App-content">
          {isLoading ? <RecipesLoader /> : <RecipeList />}
          <FavoritesList favListRef={favListRef} />
        </main>
      </div>
    </div>
  );
}

export default App;
