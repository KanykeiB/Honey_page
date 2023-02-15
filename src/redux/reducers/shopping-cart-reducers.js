import { ADD_TO_SHOPPING_CART, GET_SHOPPING_CART_LIST, REMOVE_FROM_SHOPPING_CART } from "../types/types"


const initialState = []

const shoppingCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_SHOPPING_CART:
            return {
                ...state,
                data: action.payload
            }
        case REMOVE_FROM_SHOPPING_CART:
            return {
                ...state,
                data: null
            }
        case GET_SHOPPING_CART_LIST:
            return {
                ...state,
                list: action.payload
            }
        default: 
        return state
    }
}
export default shoppingCartReducer