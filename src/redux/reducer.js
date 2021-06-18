const INITIAL_STATE = {
  favorites: [],
  recipes: [],
  loading: false,
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
    case "REJECT_RECIPE":
      return {
        ...state,
        recipes: state.recipes.filter((recipe) => recipe.id !== action.payload),
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
    case "SET_LOADING_ON":
      return {
        ...state,
        loading: true,
      };
    case "SET_LOADING_OFF":
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
