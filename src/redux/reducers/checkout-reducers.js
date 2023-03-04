import { PLACE_AN_ORDER } from "../types/types"

const initialState ={
    loading: false,
    error: null,
    id:null
}

const checkoutReducers =(state= initialState, action) =>{
    switch (action.type){
        case PLACE_AN_ORDER.REQUEST: 
        return {
            ...state,
            loading: true
        }
        case PLACE_AN_ORDER.SUCCESS:
            return {
                ...state,
                loading:false,
                id: action.payload,
                error:null
            }
            case PLACE_AN_ORDER.ERROR:
                return{
                    ...state,
                    loading:false,
                    error:action.payload
                }
        default:
            return state

    }
}
export default checkoutReducers