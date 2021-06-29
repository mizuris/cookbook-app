import React from "react";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

function CloseMessage({ handleClose }) {
  return (
    <IconButton onClick={handleClose} color="secondary">
      <CloseIcon />
    </IconButton>
  );
}

export default CloseMessage;
