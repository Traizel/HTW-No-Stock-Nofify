import { combineReducers } from "redux";

const itemlist = (state = [], action) => {
  switch (action.type) {
    case "SET_ITEM":
      return action.payload;
    default:
      return state;
  }
};

const displayState = (state = true, action) => {
  switch (action.type) {
    case "SET_UPDATING":
      return false;
    case "SET_DONE":
      return true;
    default:
      return state;
  }
};



export default combineReducers({
  itemlist,
  displayState,
});