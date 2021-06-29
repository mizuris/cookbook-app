import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import FavoritesList from "../Favorites/FavoritesList";

function Favorites({ favListRef }) {
  return (
    <>
      <SectionHeader control="favorites" text="Your favorite recipes" />
      <FavoritesList favListRef={favListRef} />
    </>
  );
}

export default Favorites;
