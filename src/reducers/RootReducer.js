import { combineReducers } from "redux";
import cartReducer from "./CartReducer";
import searchReducer from "./SearchReducer";

const rootReducer = combineReducers({ cartReducer, searchReducer });

export default rootReducer;