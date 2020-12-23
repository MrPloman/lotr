export const listElementsReducer = (state = [], action) => {
  switch (action.type) {
    case "list":
      state = action.payload;
      return state;
      break;
    default:
      return state;
  }
};
