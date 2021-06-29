import React from "react";
import { IconButton, Typography } from "@material-ui/core";
import ErrorIcon from "@material-ui/icons/Error";

function ErrorMessage({ message }) {
  return (
    <>
      <IconButton color="inherit">
        <ErrorIcon />
      </IconButton>
      <Typography variant="button">{message}</Typography>
    </>
  );
}

export default ErrorMessage;
