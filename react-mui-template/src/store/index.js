/* eslint-disable no-unused-vars */
import { combineReducers } from "redux";
import { createStore } from "redux";
import themeReducer from "./theme";

const rootReducer = combineReducers({
  theme: themeReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
