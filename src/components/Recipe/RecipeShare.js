import React from "react";
import { IconButton, Link } from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";

function RecipeShare({ sourceUrl }) {
  return (
    <IconButton aria-label="share">
      <Link
        href={sourceUrl}
        target="_blank"
        rel="noopener"
        color="inherit"
      >
        <ShareIcon fontSize="small" />
      </Link>
    </IconButton>
  );
}

export default RecipeShare;
