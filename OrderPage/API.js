import jwtDecode from 'jwt-decode'
import axios from 'axios'

const guestInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true
})

const authInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true
})

export const fetchBasket = async () => {
    const { data } = await guestInstance.get('basket/getone')
    return data
}

export const check = async () => {
    let userData
    try {
        let userToken = localStorage.getItem('token')
        
        if (!userToken) {
            return false
        }
        
        const response = await authInstance.get('user/check')
        userToken = response.data.token
        userData = jwtDecode(userToken)
        localStorage.setItem('token', userToken)
        return userData
    } catch(e) {
        localStorage.removeItem('token')
        return false
    }
}

export const userCreate = async (body) => {
    const { data } = await authInstance.post('order/user/create', body)
    return data
}

export const guestCreate = async (body) => {
    const { data } = await guestInstance.post('order/guest/create', body)
    return data
}



