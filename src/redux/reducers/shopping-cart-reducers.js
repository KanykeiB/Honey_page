import {
    ADD_TO_SHOPPING_CART,
    GET_SHOPPING_CART_LIST,
    REMOVE_FROM_SHOPPING_CART,
    DECREASE_QUANTITY_CART,
    ADD_QUANTITY_CART,
} from "../types/types"


const initialState = []

const shoppingCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_SHOPPING_CART:
            // const cart = [
            //     ...state, {...action.payload, quantity: 1}
            // ]
            // localStorage.setItem('cart', JSON.stringify(cart))
            return [...state, {...action.payload, quantity: 1}]
        case ADD_QUANTITY_CART:
            // const quantityCart = state.map(el => el.id === action.payload.id ? {
            //     ...action.payload,
            //     quantity: action.payload.quantity + 1
            // } : el)
            // localStorage.setItem('cart', JSON.stringify(quantityCart))
            return state.map(el => el.id === action.payload.id ? {
                ...action.payload,
                quantity: action.payload.quantity + 1
            } : el)
        case DECREASE_QUANTITY_CART:
            // const decreaseQuantity = state.map(el => el.id === action.payload.id ? {
            //     ...action.payload,
            //     quantity: action.payload.quantity - 1
            // } : el)
            // localStorage.setItem('cart', JSON.stringify(decreaseQuantity))
            return state.map(el => el.id === action.payload.id ? {
                ...action.payload,
                quantity: action.payload.quantity - 1
            } : el)
        case REMOVE_FROM_SHOPPING_CART:
            // const removeItem = state.filter(el => el.id !== action.payload.id)
            // localStorage.setItem('cart', JSON.stringify(removeItem))
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

export default shoppingCartReducer