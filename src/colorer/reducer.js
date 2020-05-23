export const colorReducer = function (state = {red: 0, green: 0, blue: 0, opacity: 1}, action) {
    switch (action.type) {
      case "RED":
        return { ...state, red: action.value };
      case "GREEN":
        return  { ...state, green: action.value };
      case "BLUE":
        return  { ...state, blue: action.value };
      case "OPACITY":
        return  { ...state, opacity: action.value / 100 }
      default:
        return state;
    }
  };