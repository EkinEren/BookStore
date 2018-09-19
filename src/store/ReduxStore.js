import React from "react";
import { createStore } from "redux";
import searchReducer from "../reducers/SearchReducer";

const store = createStore(searchReducer);

export default store;