import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from 'redux-logger'
import rootReducer from "../reducers/RootReducer";

const store = createStore(rootReducer, applyMiddleware(thunk, logger));
store.subscribe(() => console.log(store.getState()))
export default store;