import React, { useState, useRef, useEffect } from "react";
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

  // Loading screen
  const [loadingScreen, setLoadingScreen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoadingScreen(false);
    }, 3500);
  }, [loadingScreen]);

  // Loading data indictaor
  const [recipesLoading, setRecipesLoading] = useState(false);
  const changeLoadingState = (status) => setRecipesLoading(status);

  return loadingScreen ? (
    <AppLoader loadingScreen={loadingScreen} />
  ) : (
    <div className={classes.app} ref={topRef}>
      <TopBar scrollTopRef={topRef} scrollFavsRef={favListRef} />
      <div className={classes.appContainer}>
        <RecipeGetForm changeLoadingState={changeLoadingState} />
        <main>
          <section>
            <SectionHeader control="recipes" text="Your recipes" />
            {recipesLoading ? <RecipesLoader /> : <RecipeList />}
          </section>
          <section>
            <SectionHeader control="favorites" text="Your favorite recipes" />
            <FavoritesList favListRef={favListRef} />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
