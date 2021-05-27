import React from "react";

function Recipe({ recipe }) {
  const { title, image } = recipe;
  return (
    <div>
      <img src={image} alt={title} />
      <p>{title}</p>
    </div>
  );
}

export default Recipe;
