import * as actionTypes from '../../../../actionConstants';

const initalState = {
    tabToRender: 0,
}
export default function catalogUiReducer(state = initalState,action){
    switch (action.type) {
    case actionTypes.TOGGLE_TAB_VIEWS:
        return {
            ...state,
            tabToRender: action.payload
        };
        default:
            return state;
    }
}