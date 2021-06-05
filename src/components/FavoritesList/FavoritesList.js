import React from "react";
import { useSelector } from "react-redux";

function FavoritesList() {
  const favorites = useSelector((state) => state.favorites);
  if (!favorites || !favorites.length) {
    return <p>No favorites</p>;
  }
  return (
    <div>
      <ul>
        {favorites.map((recipe) => (
          <li key={recipe.id}>{recipe.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default FavoritesList;
