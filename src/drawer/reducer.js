export const drawReducer = function (state = [], action) {
    switch (action.type) {
      case "DRAW":
        return action.value;
      default:
        return state;
    }
  };