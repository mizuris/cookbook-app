import React from "react";

function Recipe({ recipe }) {
  const { title, image, sourceUrl } = recipe;

  return (
    <div>
      <img src={image} alt={title} />
      <p>{title}</p>
      <a href={sourceUrl}>Get details</a>
    </div>
  );
}

export default Recipe;
