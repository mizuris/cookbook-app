import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Button, TextField, Grid } from "@material-ui/core";
import { motion } from "framer-motion";

function RecipeGetForm({ changeLoadingState }) {
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(true);
  const [query, setQuery] = useState({
    text: "",
    number: "",
  });

  // Submiting form and reseting input values to default state
  const handleSubmit = async (e) => {
    e.preventDefault();
    await getRecipe();
    setQuery({ text: "", number: "" });
  };

  // Calling API from endpoint and saving it to redux
  const getRecipe = async () => {
    changeLoadingState(true);
    const queryResult = await fetch(
      `http://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${query.text}&number=${query.number}&addRecipeInformation=true`
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
          dispatch({
            type: "SET_ERROR",
            payload: err,
          });
          changeLoadingState(false);
        });
      changeLoadingState(false);
    }
  };

  // Disabling button when no inputs
  useEffect(() => {
    query.text && query.number ? setDisabled(false) : setDisabled(true);
  }, [disabled, query]);

  return (
    <motion.div
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <form style={{ marginBottom: "5%" }} onSubmit={handleSubmit}>
        <Grid container spacing={4} alignItems="flex-end">
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
              pattern="[0-9]*"
              inputProps={{ min: 1, max: 20 }}
              value={query.number}
              onChange={(e) =>
                setQuery({ ...query, [e.target.name]: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12} sm={1}>
            <Button
              fullWidth
              disabled={disabled}
              variant="contained"
              color="secondary"
              type="submit"
            >
              Find
            </Button>
          </Grid>
        </Grid>
      </form>
    </motion.div>
  );
}

export default RecipeGetForm;
