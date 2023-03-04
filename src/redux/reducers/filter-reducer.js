import { FILTER_HONEY } from "../types/types"

export const TYPE_OF_FILTER = {
    SHOW_HONEY: 'SHOW_HONEY',
    SHOW_OTHER: 'SHOW_OTHER',
    SHOW_ALL: 'SHOW_ALL'
}
const initialState = TYPE_OF_FILTER.SHOW_HONEY

const filterReducer = (state=initialState, action)=>{
    switch(action.type){
        case FILTER_HONEY:
            return action.payload
            default: return state
    }
}
export default filterReducer