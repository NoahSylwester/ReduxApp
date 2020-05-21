export const writeReducer = function (state = '', action) {
    switch (action.type) {
      case "WRITE":
        return action.value;
      default:
        return state;
    }
  };