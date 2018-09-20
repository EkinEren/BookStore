import React from "react";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import searchReducer from "../reducers/SearchReducer";

const store = createStore(searchReducer, applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()))
export default store;