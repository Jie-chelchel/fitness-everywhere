const initialClass = [];

const classes = (state = initialClass, action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE_CLASS":
      return action.payload;
    case "UPDATE_CLASS":
      return state.map((item) => {
        return item.classID === action.payload.classID ? action.payload : item;
      });
    default:
      return state;
  }
};

export default classes;
