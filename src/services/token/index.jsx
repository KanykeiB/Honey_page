const AUTH_TOKEN ='auth_token'

const getToken = () =>{
    return localStorage.getItem(AUTH_TOKEN)
}

const setToken = (token) =>{
    if (token) {
        localStorage.setItem(AUTH_TOKEN, token)
    }
}

const removeToken = () =>{
    localStorage.removeItem(AUTH_TOKEN)
}

export {
    getToken,
    setToken,
    removeToken
}