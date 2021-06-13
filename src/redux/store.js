import { createStore } from "redux";
import reducer from "./reducer";
// import { loadState } from "./localStorage";

// const favState = loadState();

export const store = createStore(reducer);
