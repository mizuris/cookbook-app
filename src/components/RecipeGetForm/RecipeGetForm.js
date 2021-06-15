import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, TextField, Grid } from "@material-ui/core";

function RecipeGetForm({ changeLoadingState }) {
  const dispatch = useDispatch();
  const [query, setQuery] = useState({
    text: "",
    number: 1,
  });

  // Submiting form and reseting input values to default state
  const handleSubmit = async (e) => {
    e.preventDefault();
    await getRecipe();
    setQuery({ text: "", number: 1 });
  };

  // Calling API from endpoint and saving it to redux
  const getRecipe = async () => {
    changeLoadingState(true);
    const queryResult = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${query.text}&number=${query.number}&addRecipeInformation=true`
    );
    if (queryResult) {
      changeLoadingState(true);
      await queryResult
        .json()
        .then((data) =>
          dispatch({
            type: "GET_RECIPES",
            payload: data.results,
          })
        )
        .catch((err) => {
          console.log(err);
          changeLoadingState(false);
        });
      changeLoadingState(false);
    }
  };

  return (
    <form style={{ marginBottom: "5%" }} onSubmit={handleSubmit}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={9}>
          <TextField
            fullWidth
            label="Search recipes"
            type="text"
            name="text"
            value={query.text}
            onChange={(e) =>
              setQuery({ ...query, [e.target.name]: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            fullWidth
            label="Quantity"
            type="number"
            name="number"
            inputProps={{ min: 1, max: 20 }}
            value={query.number}
            onChange={(e) =>
              setQuery({ ...query, [e.target.name]: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={1}>
          <Button variant="contained" color="secondary" type="submit">
            Find
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default RecipeGetForm;
