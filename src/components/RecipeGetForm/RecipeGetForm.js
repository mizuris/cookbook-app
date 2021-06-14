import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField, Grid } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    margin: "50px auto",
  },
}));

function RecipeGetForm() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [query, setQuery] = useState({
    text: "",
    number: 1,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await getRecipe();
    setQuery({ text: "", number: 1 });
  };

  const getRecipe = async () => {
    const queryResult = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${query.text}&number=${query.number}&addRecipeInformation=true`
    );
    if (queryResult) {
      queryResult
        .json()
        .then((data) =>
          dispatch({
            type: "GET_RECIPES",
            payload: data.results,
          })
        )
        .catch((err) => console.log(err));
    }
  };

  return (
    <form onSubmit={handleSubmit} className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={7}>
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
        <Grid item xs={12} sm={3}>
          <TextField
            fullWidth
            label="Quantity"
            type="number"
            name="number"
            value={query.number}
            onChange={(e) =>
              setQuery({ ...query, [e.target.name]: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <Button variant="contained" color="primary" type="submit">
            Find
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default RecipeGetForm;
