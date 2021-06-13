export const loadState = () => {
  try {
    const favoriteState = localStorage.getItem("favorites-list");
    if (favoriteState === null) {
      return undefined;
    }
    return JSON.parse(favoriteState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const favoriteState = JSON.stringify(state);
    localStorage.setItem("favorites-list", favoriteState);
  } catch (err) {
    console.log(err);
  }
};
