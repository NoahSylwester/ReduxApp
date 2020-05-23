export const drawReducer = function (state = [], action) {
    switch (action.type) {
      case "DRAW":
        return [...state, action.value];
      case "CLEAR":
        return [];
      default:
        return state;
    }
  };