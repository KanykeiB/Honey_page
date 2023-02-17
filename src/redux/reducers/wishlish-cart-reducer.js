import {
    ADD_TO_LIKE_CART,
    GET_SHOPPING_CART_LIST,
    REMOVE_FROM_SHOPPING_CART
} from "../types/types";

const initialState = []


const wishListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_LIKE_CART:
            return [
                ...state,
                action.payload
            ]
        case REMOVE_FROM_SHOPPING_CART:
            return state.filter(el => el.id !== action.payload.id)
        case GET_SHOPPING_CART_LIST:
            return {
                ...state,
                list: action.payload
            }
        default:
            return state
    }
}

export default wishListReducer