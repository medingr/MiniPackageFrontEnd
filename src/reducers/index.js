import {combineReducers} from "redux";

import packageReducer from "./packageReducer";

const rootReducer = combineReducers({
   packageRedux  : packageReducer
});

export default rootReducer;