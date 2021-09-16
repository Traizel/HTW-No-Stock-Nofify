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

const setView = (state = true, action) => {
  switch (action.type) {
    case "SET_VIEW":
      return action.payload;
    default:
      return state;
  }
};

const setChecked = (state = true, action) => {
  switch (action.type) {
    case "SET_CHECKED":
      if (action.payload === true) {
        return false;
      } else {
      return true;
      }
    default:
      return state;
  }
};

const addChecked = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CHECKED":
      if (action.payload.checked) {
      return [...state, action.payload.item];
      } else {
      return state.slice(0, action.payload.checked)
          .concat(state.slice(action.payload.checked + 1));
      }
    default:
      return state;
  }
};


export default combineReducers({
  itemlist,
  displayState,
  setView,
  setChecked,
  addChecked,
});