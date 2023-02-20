//-------------------------------------------Get Product--------------------------------------------------//
const GET_HONEY ={
    REQUEST: 'GET_HONEY_REQUEST',
    RECEIVE: 'GET_HONEY_RECEIVE',
    FAILURE: 'GET_HONEY_FAILURE'
}

const GET_HONEY_BY_ID ={
    REQUEST: 'GET_HONEY_BY_ID_REQUEST',
    RECEIVE: 'GET_HONEY_BY_ID_RECEIVE',
    FAILURE: 'GET_HONEY_BY_ID_FAILURE'
}

//-------------------------------------------Authorization------------------------------------------------//

const AUTH_LOGIN ={
    REQUEST: "AUTH_LOGIN_REQUEST",
    SUCCESS: "AUTH_LOGIN_SUCCESS",
    ERROR: "AUTH_LOGIN_ERROR"
}

const AUTH_REGISTER ={
    REQUEST: "AUTH_REGISTER_REQUEST",
    SUCCESS: "AUTH_REGISTER_SUCCESS",
    ERROR: "AUTH_REGISTER_ERROR"
}

const AUTH_LOGOUT='AUTH_LOGOUT'



//-------------------------------------------Wishing List------------------------------------------------//


//-------------------------------------------Shopping Cart-----------------------------------------------//
const ADD_TO_SHOPPING_CART = 'ADD_TO_SHOPPING_CART';
const ADD_QUANTITY_CART = 'ADD_QUANTITY_CART';
const DECREASE_QUANTITY_CART = 'DECREASE_QUANTITY_CART';
const ADD_TO_LIKE_CART = 'ADD_TO_LIKE_CART';
const REMOVE_FROM_WISH_LIST = 'REMOVE_FROM_WISH_LIST';
const REMOVE_FROM_SHOPPING_CART = 'REMOVE_FROM_SHOPPING_CART';
const GET_SHOPPING_CART_LIST = 'GET_SHOPPING_CART_LIST'

//-------------------------------------------Contact Us--------------------------------------------------//


//-------------------------------------------Checkout----------------------------------------------------//

export{
    AUTH_LOGIN, 
    AUTH_REGISTER,
    AUTH_LOGOUT,
    GET_HONEY,
    GET_HONEY_BY_ID,
    ADD_TO_SHOPPING_CART,
    DECREASE_QUANTITY_CART,
    ADD_TO_LIKE_CART,
    REMOVE_FROM_WISH_LIST,
    REMOVE_FROM_SHOPPING_CART,
    GET_SHOPPING_CART_LIST,
    ADD_QUANTITY_CART
}