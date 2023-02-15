import { ADD_TO_SHOPPING_CART, AUTH_LOGIN, AUTH_LOGOUT, AUTH_REGISTER, GET_HONEY, GET_HONEY_BY_ID, GET_SHOPPING_CART_LIST, REMOVE_FROM_SHOPPING_CART } from "../types/types";



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

const getHoneyByIdRequestActionCreator =()=>({
    type: GET_HONEY_BY_ID.REQUEST
})

const getHoneyByIdReceiveActionCreator =(data)=>({
    type: GET_HONEY_BY_ID.RECEIVE,
    payload: data
})

const getHoneyByIdFailureActionCreator =(err)=>({
    type: GET_HONEY_BY_ID.FAILURE,
    payload: err
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
const addToShoppingCart =(data)=>({
    type: ADD_TO_SHOPPING_CART,
    payload: data
})
const removeFromShoppingCart =(data)=>({
    type: REMOVE_FROM_SHOPPING_CART,
    payload: data
})
const getShoppingCartList =(data)=>({
    type: GET_SHOPPING_CART_LIST,
    payload: data
})

//-------------------------------------------Contact Us--------------------------------------------------//


//-------------------------------------------Checkout----------------------------------------------------//

export {
    addToShoppingCart,
    removeFromShoppingCart,
    getShoppingCartList,

    getHoneyListRequestActionCreator,
    getHoneyListReceiveActionCreator,
    getHoneyListFailureActionCreator,

    getHoneyByIdRequestActionCreator,
    getHoneyByIdReceiveActionCreator,
    getHoneyByIdFailureActionCreator,

    authLoginRequestActionCreator,
    authLoginSuccessActionCreator,
    authLoginErrorActionCreator,

    authRegisterRequestActionCreator,
    authRegisterSuccessActionCreator,
    authRegisterErrorActionCreator,

    authLogoutActionCreator
}