import React, { useState, useEffect } from "react";
import { Snackbar, SnackbarContent, Slide } from "@material-ui/core";
import { useSelector } from "react-redux";
import ErrorMessage from "./ErrorMessage";
import CloseMessage from "./CloseMessage";

function Error() {
  const error = useSelector((state) => state.error);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const anchorOrigin = { vertical: "bottom", horizontal: "center" };

  useEffect(() => {
    error && setOpen(true);
    return () => setOpen(false);
  }, [error]);

  if (error) {
    return (
      <Snackbar
        anchorOrigin={anchorOrigin}
        open={open}
        onClose={handleClose}
        autoHideDuration={4000}
        TransitionComponent={Slide}
      >
        <SnackbarContent
          message={<ErrorMessage message={error.message} />}
          action={<CloseMessage handleClose={handleClose} />}
        />
      </Snackbar>
    );
  }

  return null;
}

export default Error;
