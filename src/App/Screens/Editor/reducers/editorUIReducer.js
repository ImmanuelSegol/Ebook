import * as actionTypes from '../../../../actionConstants';
const initalState = {
    canEdit:true,
    sideBarIsVisibal: true,
}

export default function editorUIReducer(state = initalState,action){
    switch(action.type){
        case actionTypes.TOGGLE_SIDEBAR_EDITOR:
            return {
                ...state,
                sideBarIsVisibal: !state.sideBarIsVisibal
            }
        default:
            return state;
    }
}