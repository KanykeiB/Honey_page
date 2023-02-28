import { FILTER_HONEY } from "../types/types"

export const TYPE_OF_FILTER = {
    SHOW_COMPLETE: 'SHOW_COMPLETE',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
    SHOW_ALL: 'SHOW_ALL'
}
const initialState = TYPE_OF_FILTER.SHOW_ALL

const filterReducer = (state=initialState, action)=>{
    switch(action.type){
        case FILTER_HONEY:
            return action.payload
            default: return state
    }
}
export default filterReducer