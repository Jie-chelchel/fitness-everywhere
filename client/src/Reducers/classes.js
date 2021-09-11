import {
  FETCH_ALL,
  CREATE_CLASS,
  UPDATE_CLASS,
  DELETE_CLASS,
} from "../Actions/classes";

const initialClass = [];
const classes = (state = initialClass, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE_CLASS:
      return action.payload;
    case DELETE_CLASS:
      return state.filter((item) => item.classID !== action.payload);
    case UPDATE_CLASS:
      return state.map((item) => {
        return item.classID === action.payload.classID ? item : action.payload;
      });
    default:
      return state;
  }
};

export default classes;
