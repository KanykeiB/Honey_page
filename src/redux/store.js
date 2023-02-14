import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import authReducers from "./reducers/auth-reducers";

const rootReducer = combineReducers({
    auth: authReducers
})
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))