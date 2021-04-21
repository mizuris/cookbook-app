import React from "react";

function Recipe({ recipe }) {
  const { title, image } = recipe;

  return (
    <div className="container">
      <h1>{title}</h1>
      <img style={{ height: "200px", width: "auto" }} src={image} alt={title} />
    </div>
  );
}

export default Recipe;
