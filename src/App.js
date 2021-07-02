import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import AppLoader from "./components/Loader/AppLoader";
import TopBar from "./components/TopBar/TopBar";
import RecipeGetForm from "./components/RecipeGetForm/RecipeGetForm";
import Recipes from "./components/Containers/Recipes";
import Favorites from "./components/Containers/Favorites";
import Error from "./components/Error/Error";

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

  // Loading screen render
  if (loadingScreen) {
    return <AppLoader loadingScreen={loadingScreen} />;
  }

  // App content render
  return (
    <div className={classes.app}>
      <TopBar />
      <main className={classes.appContainer}>
        <RecipeGetForm changeLoadingState={changeLoadingState} />
        <Recipes recipesLoading={recipesLoading} />
        <Favorites />
      </main>
      <Error />
    </div>
  );
}

export default App;
