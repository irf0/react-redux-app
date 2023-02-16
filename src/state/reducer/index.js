import { combineReducers } from "redux";
import amountReducer from "./amountReducer";

const reducers = combineReducers({
  amount: amountReducer,
});
export default reducers;

//combineReducers turns a many reducer function as one wrapped.
//We can add as much as variables we want inside combineReducers.
