import { combineReducers } from "redux";

const count = (count = 0, action) => {
  if (action.type === "INCREAMENT") {
    return count + 1;
  } else if (action.type === "DECREAMENT") {
    return count - 1;
  }
  return count;
};

export default combineReducers({
  count,
});
