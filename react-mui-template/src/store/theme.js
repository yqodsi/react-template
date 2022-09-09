const defaultState = {
  darkMode: localStorage.getItem("darkMode") === "true" ? true : false,
};

const themeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "TOGGLE_DARK_MODE":
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    default:
      return state;
  }
};

export default themeReducer;
