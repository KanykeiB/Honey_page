import { GET_HONEY, GET_HONEY_BY_ID } from "../types/types"


const initialState = {
    loading: false,
    error: null,
    data: {},
    list: []
}

const honeyReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_HONEY.REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_HONEY.RECEIVE:
            return {
                ...state,
                loading: false,
                list: action.payload
            }
        case GET_HONEY.FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                list: null
            }
        case GET_HONEY_BY_ID.REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_HONEY_BY_ID.RECEIVE:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case GET_HONEY_BY_ID.FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                data: null
            }
            default:
                return state
    }
}
export default honeyReducer