import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core";
import FavoritesList from "./components/Favorites/FavoritesList";
import RecipeGetForm from "./components/RecipeGetForm/RecipeGetForm";
import RecipeList from "./components/Recipe/RecipeList";
import TopBar from "./components/TopBar/TopBar";
import RecipesLoader from "./components/Loader/RecipesLoader";
import AppLoader from "./components/Loader/AppLoader";
import SectionHeader from "./components/SectionHeader/SectionHeader";

const useStyles = makeStyles(() => ({
  app: {
    width: "100%",
    minHeight: "100%",
    position: "relative",
  },
  appContainer: {
    width: "80%",
    paddingTop: 80,
    margin: "0 auto",
  },
}));

function App() {
  const classes = useStyles();
  const topRef = useRef(null);
  const favListRef = useRef(null);
  const favorites = useSelector((state) => state.favorites);
  const recipes = useSelector((state) => state.recipes);

  // Loading screen
  const [loadingScreen, setLoadingScreen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoadingScreen(false);
    }, 3500);
  }, [loadingScreen]);

  const [isLoading, setIsLoading] = useState(false);
  const changeLoadingState = (status) => setIsLoading(status);

  return loadingScreen ? (
    <AppLoader loadingScreen={loadingScreen} />
  ) : (
    <div className={classes.app} ref={topRef}>
      <TopBar scrollTopRef={topRef} scrollFavsRef={favListRef} />
      <div className={classes.appContainer}>
        <RecipeGetForm changeLoadingState={changeLoadingState} />
        <main>
          <SectionHeader dependencyArray={recipes} text="Your recipes" />
          {isLoading ? <RecipesLoader /> : <RecipeList />}
          <SectionHeader
            dependencyArray={favorites}
            text="Your favorite recipes"
          />
          <FavoritesList favListRef={favListRef} />
        </main>
      </div>
    </div>
  );
}

export default App;
