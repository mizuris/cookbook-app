import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Input, TextField } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    margin: "50px auto",
    textAlign: "center",
  },
  textInput: {
    width: 300,
    maxWidth: "50%",
  },
  submitButton: {
    marginLeft: "3%",
  },
}));

function RecipeGetForm({ getRecipeCallback }) {
  const classes = useStyles();
  const [query, setQuery] = useState({
    text: "",
    number: 3,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await getRecipe();
    setQuery({ text: "", number: 3 });
  };

  const getRecipe = async () => {
    const queryResult = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${query.text}&number=${query.number}&addRecipeInformation=true`
    );
    if (queryResult) {
      queryResult
        .json()
        .then((data) => getRecipeCallback(data.results))
        .catch((err) => console.log(err));
    }
  };

  return (
    <form onSubmit={handleSubmit} className={classes.root}>
      <Input
        className={classes.textInput}
        color="primary"
        placeholder="Search recipes"
        type="text"
        name="text"
        value={query.text}
        onChange={(e) =>
          setQuery({ ...query, [e.target.name]: e.target.value })
        }
      />
      <TextField
        type="number"
        name="number"
        value={query.number}
        onChange={(e) =>
          setQuery({ ...query, [e.target.name]: e.target.value })
        }
      />
      <Button
        className={classes.submitButton}
        variant="contained"
        color="primary"
        type="submit"
      >
        Find
      </Button>
    </form>
  );
}

export default RecipeGetForm;
