import React, { useState } from "react";
import { Snackbar, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

function ErrorMessage({ error }) {
  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      open={open}
      autoHideDuration={5000}
      onClose={handleClose}
      message={error ? error : "Something went wrong!"}
      action={
        <IconButton color="secondary" onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      }
    />
  );
}

export default ErrorMessage;
