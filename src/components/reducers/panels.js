const initialState = { items: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case "CARD:ADD":
      return {
        ...state,
        items: action.payload
      };
      case "PANELS:ADD":
        return {
          ...state,
          items: action.payload
        };
    default:
      return state;
  }
};
