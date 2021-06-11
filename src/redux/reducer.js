const INITIAL_STATE = {
  favorites: [],
  recipes: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_FAVORITES":
      if (!state.favorites.includes(action.payload)) {
        return { ...state, favorites: [...state.favorites, action.payload] };
      }
      return {
        ...state,
        favorites: state.favorites.filter(
          (recipe) => recipe.id !== action.payload.id
        ),
      };
    case "REMOVE_FROM_FAVORITES":
      return {
        ...state,
        favorites: state.favorites.filter(
          (recipe) => recipe.id !== action.payload
        ),
      };
    case "GET_RECIPES":
      return {
        ...state,
        recipes: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;