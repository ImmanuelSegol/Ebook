import * as actionTypes from '../../../../actionConstants';

const initalState = {
    currentEbook:null,
    tabToRender: 0,
}
export default function catalogUiReducer(state = initalState,action){
    switch (action.type) {
    case actionTypes.TOGGLE_TAB_VIEWS:
        return {
            ...state,
            tabToRender: action.payload
        };
    case actionTypes.SET_CURRENT_EBOOK:
        return{
            ...state,
            currentEbook: action.payload,
        }
        default:
            return state;
    }
}