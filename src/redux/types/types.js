//-------------------------------------------Get Product--------------------------------------------------//


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

const AUTH_ME ={
    REQUEST: "AUTH_ME_REQUEST",
    SUCCESS: "AUTH_ME_SUCCESS",
    ERROR: "AUTH_ME_ERROR"
}

//-------------------------------------------Wishing List------------------------------------------------//


//-------------------------------------------Shopping Cart-----------------------------------------------//


//-------------------------------------------Contact Us--------------------------------------------------//


//-------------------------------------------Checkout----------------------------------------------------//

export{
    AUTH_LOGIN, 
    AUTH_REGISTER,
    AUTH_LOGOUT,
    AUTH_ME
}