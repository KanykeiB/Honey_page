import {
    ADD_QUANTITY_CART,
    ADD_TO_SHOPPING_CART,
    AUTH_LOGIN,
    AUTH_LOGOUT,
    AUTH_REGISTER,
    GET_HONEY,
    GET_HONEY_BY_ID,
    FILTER_HONEY,
    GET_SHOPPING_CART_LIST,
    REMOVE_FROM_SHOPPING_CART,
    DECREASE_QUANTITY_CART, ADD_TO_LIKE_CART, REMOVE_FROM_WISH_LIST

} from "../types/types";



//-------------------------------------------Get Product--------------------------------------------------//

const getHoneyListRequestActionCreator = () => ({
    type: GET_HONEY.REQUEST
})
const getHoneyListReceiveActionCreator = (data) => ({
    type: GET_HONEY.RECEIVE,
    payload: data
})
const getHoneyListFailureActionCreator = (err) => ({
    type: GET_HONEY.FAILURE,
    payload: err
})

//----

const getHoneyByIdRequestActionCreator = () => ({
    type: GET_HONEY_BY_ID.REQUEST
})

const getHoneyByIdReceiveActionCreator = (data) => ({
    type: GET_HONEY_BY_ID.RECEIVE,
    payload: data
})

const getHoneyByIdFailureActionCreator = (err) => ({
    type: GET_HONEY_BY_ID.FAILURE,
    payload: err
})

//----
const filterHoneyActionCreator = (filter) => ({
    type: FILTER_HONEY,
    payload: filter
})

//-------------------------------------------Authorization------------------------------------------------//


const authLoginRequestActionCreator = () => ({
    type: AUTH_LOGIN.REQUEST
})

const authLoginSuccessActionCreator = (data) => ({
    type: AUTH_LOGIN.SUCCESS,
    payload: data
})

const authLoginErrorActionCreator = (err) => ({
    type: AUTH_LOGIN.ERROR,
    payload: err
})


//---

const authRegisterRequestActionCreator = () => ({
    type: AUTH_REGISTER.REQUEST
})

const authRegisterSuccessActionCreator = (data) => ({
    type: AUTH_REGISTER.SUCCESS,
    payload: data
})

const authRegisterErrorActionCreator = (err) => ({
    type: AUTH_REGISTER.ERROR,
    payload: err
})

//---

const authLogoutActionCreator = () => ({
    type: AUTH_LOGOUT
})

//-------------------------------------------Wishing List------------------------------------------------//


//-------------------------------------------Shopping Cart-----------------------------------------------//
const addToShoppingCart = (data) => ({
    type: ADD_TO_SHOPPING_CART,
    payload: data
})
const addQuantityCart = (data) => ({
    type: ADD_QUANTITY_CART,
    payload: data
})

const decreaseQuantityCart = (data) => ({
    type: DECREASE_QUANTITY_CART,
    payload: data
})
const removeFromShoppingCart = (data) => ({
    type: REMOVE_FROM_SHOPPING_CART,
    payload: data
})

const addToLikeCart = (data) => ({
    type: ADD_TO_LIKE_CART,
    payload: data
})

const removeFromWishList = (data) => ({
    type: REMOVE_FROM_WISH_LIST,
    payload: data
})

const getShoppingCartList = (data) => ({
    type: GET_SHOPPING_CART_LIST,
    payload: data
})

//-------------------------------------------Contact Us--------------------------------------------------//


//-------------------------------------------Checkout----------------------------------------------------//

export {
    addToShoppingCart,
    addQuantityCart,
    decreaseQuantityCart,
    removeFromShoppingCart,
    addToLikeCart,
    removeFromWishList,
    getShoppingCartList,

    getHoneyListRequestActionCreator,
    getHoneyListReceiveActionCreator,
    getHoneyListFailureActionCreator,

    getHoneyByIdRequestActionCreator,
    getHoneyByIdReceiveActionCreator,
    getHoneyByIdFailureActionCreator,

    filterHoneyActionCreator,

    authLoginRequestActionCreator,
    authLoginSuccessActionCreator,
    authLoginErrorActionCreator,

    authRegisterRequestActionCreator,
    authRegisterSuccessActionCreator,
    authRegisterErrorActionCreator,

    authLogoutActionCreator
}