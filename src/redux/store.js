import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import authReducers from "./reducers/auth-reducers";
import honeyReducer from "./reducers/honey-reducers";
import shoppingCartReducer from "./reducers/shopping-cart-reducers";

const rootReducer = combineReducers({
    auth: authReducers,
    getHoney: honeyReducer,
    shoppingcart: shoppingCartReducer
})
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))