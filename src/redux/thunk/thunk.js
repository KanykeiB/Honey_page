import http from "../../services/api/index"
import { setToken } from "../../services/token"
import { authLoginErrorActionCreator, authLoginRequestActionCreator, authLoginSuccessActionCreator, authRegisterErrorActionCreator, authRegisterRequestActionCreator, authRegisterSuccessActionCreator, getHoneyByIdFailureActionCreator, getHoneyByIdReceiveActionCreator, getHoneyListFailureActionCreator, getHoneyListReceiveActionCreator, getHoneyListRequestActionCreator } from "../actions/actions"

//-------------------------------------------Get Product------------------------------------------------//
// const getHoneyList =(data)=> async (dispatch)=>{
//     dispatch(getHoneyListRequestActionCreator())
//     try{
//         const res = await http.get("http://localhost:1337/api/honeys")
//         const transform = res.data.data.map(item =>({
//             id:item.id,
//             ...item.attributes
//         }))
//         dispatch(getHoneyListReceiveActionCreator(transform))
//     }
//     catch(err){
//         dispatch(getHoneyListFailureActionCreator(err))
//     }
// }

// const getHoneyItem =(id)=> async(dispatch)=>{
//     dispatch(getHoneyListReceiveActionCreator())
//     try{
//         const res = await http.get(`http://localhost:1337/api/honeys/${id}`)
//         const transform = Object.assign({},{
//             id:res.data.data.id,
//             ...res.data.data.attributes
//         })
//         dispatch(getHoneyByIdReceiveActionCreator(transform))
//         console.log(transform)
//     } catch(err){
//         dispatch(getHoneyByIdFailureActionCreator(err))
//     }
// }

const getHoneyList = (data) => async (dispatch) => {
    dispatch(getHoneyListRequestActionCreator())
    try {
        const res = await http.get("http://13.115.195.252/shop/")
        dispatch(getHoneyListReceiveActionCreator(res.data))
    }
    catch (err) {
        dispatch(getHoneyListFailureActionCreator(err))
    }
}

const getHoneyItem = (id) => async (dispatch) => {
    dispatch(getHoneyListReceiveActionCreator())
    try {
        const res = await http.get(`http://13.115.195.252/shop/${id}`)
        dispatch(getHoneyByIdReceiveActionCreator(res.data))
    } catch (err) {
        dispatch(getHoneyByIdFailureActionCreator(err))
    }
}

//-------------------------------------------Authorization-----------------------------------------------//


// const authRegisterUser = (data) => async (dispatch) => {
//     dispatch(authRegisterRequestActionCreator())
//     try {
//         const res = await http.post("http://localhost:1337/api/auth/local/register", data)
//         // post request can be changed by backend
//         dispatch(authRegisterSuccessActionCreator())
//         setToken(res.data.jwt)
//         // assuming that res.data.jwt will be token 
//     } catch (err) {
//         dispatch(authRegisterErrorActionCreator(err.response.data.error.message))
//         console.log(err.response.data.error.message)
//         throw err
//     }
// }

const authRegisterUser = (data) => async (dispatch) => {
    dispatch(authRegisterRequestActionCreator())
    try {
        const res = await http.post("http://13.115.195.252/register/", data)
        // post request can be changed by backend
        dispatch(authRegisterSuccessActionCreator())
        setToken(res.data.jwt)
        // assuming that res.data.jwt will be token 
    } catch (err) {
        dispatch(authRegisterErrorActionCreator(err.response.data.error.message))
        console.log(err.response.data.error.message)
        throw err
    }
}
//----

// const authLoginUser = (data) => async (dispatch) => {
//     dispatch(authLoginRequestActionCreator())
//     try {
//         const res = await http.post("http://localhost:1337/api/auth/local", data)
//         // post request can be changed by backend
//         dispatch(authLoginSuccessActionCreator())
//         setToken(res.data.jwt)
//         // assuming that res.data.jwt will be token 
//     } catch (err) {
//         dispatch(authLoginErrorActionCreator(err.message))
//         //assuming that thr message will contain the "Invalid stuff"
//         throw err
//     }
// }
//----

const authLoginUser = (data) => async (dispatch) => {
    dispatch(authLoginRequestActionCreator())
    try {
        const res = await http.post("http://13.115.195.252/account/token/", data)
        // post request can be changed by backend
        dispatch(authLoginSuccessActionCreator())
        setToken(res.data.token)
        // assuming that res.data.jwt will be token 
    } catch (err) {
        dispatch(authLoginErrorActionCreator(err.message))
        //assuming that thr message will contain the "Invalid stuff"
        throw err
    }
}

//-------------------------------------------Contact Us--------------------------------------------------//


//-------------------------------------------Checkout----------------------------------------------------//

export default { authRegisterUser, authLoginUser, getHoneyItem, getHoneyList }