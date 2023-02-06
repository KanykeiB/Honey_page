import { AUTH_LOGIN, AUTH_ME, AUTH_REGISTER } from "../types/types";



//-------------------------------------------Get Product--------------------------------------------------//



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

const authMeRequestActionCreator = () => ({
    type: AUTH_ME.REQUEST
})

const authMeSuccessActionCreator = (data) => ({
    type: AUTH_ME.SUCCESS,
    payload: data
})

const authMeErrorActionCreator = (err) => ({
    type: AUTH_ME.ERROR,
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

const authLogoutActionCreator =() => ({
    type: AUTH_LOGOUT
})

//-------------------------------------------Wishing List------------------------------------------------//


//-------------------------------------------Shopping Cart-----------------------------------------------//


//-------------------------------------------Contact Us--------------------------------------------------//


//-------------------------------------------Checkout----------------------------------------------------//

export{
    authLoginRequestActionCreator,
    authLoginSuccessActionCreator,
    authLoginErrorActionCreator,

    authMeRequestActionCreator,
    authMeSuccessActionCreator,
    authMeErrorActionCreator,

    authRegisterRequestActionCreator,
    authRegisterSuccessActionCreator,
    authRegisterErrorActionCreator,

    authLogoutActionCreator
}