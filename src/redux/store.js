import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import authReducers from "./reducers/auth-reducers";
import filterReducer from "./reducers/filter-reducer";
import honeyReducer from "./reducers/honey-reducers";
import shoppingCartReducer from "./reducers/shopping-cart-reducers";
import wishListReducer from "./reducers/wishlish-cart-reducer";


const rootReducer = combineReducers({
    auth: authReducers,
    getHoney: honeyReducer,
    filterHoney: filterReducer,
    shoppingcart: shoppingCartReducer,
    wishlistcart: wishListReducer
})
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))