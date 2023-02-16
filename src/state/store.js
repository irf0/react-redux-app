//Creating the redux store

import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducer from "./reducer";

export const store = configureStore(
  { reducer: reducer },
  {},
  applyMiddleware(thunk)
);

//{}-> is the initial value of the state
