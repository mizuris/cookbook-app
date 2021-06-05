const INITIAL_STATE = {
  favorites: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case "REMOVE_FROM_FAVORITES":
      return {
        ...state,
        favorites: state.favorites.filter(
          (recipe) => recipe.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default reducer;
