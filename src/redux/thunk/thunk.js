import http from "../../services/api/index"
import { setToken, setUserData } from "../../services/token"
import { authLoginErrorActionCreator, authLoginRequestActionCreator, authLoginSuccessActionCreator, authRegisterErrorActionCreator, authRegisterRequestActionCreator, authRegisterSuccessActionCreator, getHoneyByIdFailureActionCreator, getHoneyByIdReceiveActionCreator, getHoneyListFailureActionCreator, getHoneyListReceiveActionCreator, getHoneyListRequestActionCreator, placeAnOrderFailureActionCreator, placeAnOrderReceiveActionCreator, placeAnOrderRequestActionCreatorCreator } from "../actions/actions"

//-------------------------------------------Get Product------------------------------------------------//

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

const authRegisterUser = (data) => async (dispatch) => {
    dispatch(authRegisterRequestActionCreator())
    try {
        const res = await http.post("http://13.115.195.252/register/", data)
        dispatch(authRegisterSuccessActionCreator(res.data))
        setUserData(JSON.stringify(res.data))
    } catch (err) {
        dispatch(authRegisterErrorActionCreator(err.response.data.username))
        throw err
    }
}

//----

const authLoginUser = (data) => async (dispatch) => {
    dispatch(authLoginRequestActionCreator())
    try {
        const res = await http.post("http://13.115.195.252/account/token/", data)
        dispatch(authLoginSuccessActionCreator())
        setToken(res.data.token)
    } catch (err) {
        dispatch(authLoginErrorActionCreator(err.response.data.non_field_errors))
        throw err
    }
}

//-------------------------------------------Checkout----------------------------------------------------//
const checkout =(data) => async (dispatch) =>{
    dispatch(placeAnOrderRequestActionCreatorCreator())
    try{
        const res = await http.post("http://13.115.195.252/shop/order/", data)
        dispatch(placeAnOrderReceiveActionCreator())
    } catch (err) {
        dispatch(placeAnOrderFailureActionCreator(err))
        throw err
    }
}


export default { authRegisterUser, authLoginUser, getHoneyItem, getHoneyList, checkout}