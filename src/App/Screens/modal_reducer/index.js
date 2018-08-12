import * as actionTypes from '../../../actionConstants';
const initalState = {
    modals: [],
}

export default function modalReducer(state = initalState, action) {
    switch (action.type) {
        case actionTypes.SHOW_MODAL:
            return{
                ...state,
                modals: state.modals.concat(action.payload),
            }
        case actionTypes.HIDE_MODAL:
            return{
                ...state,
                modals: state.modals.filter(item => item.id != action.payload.id)
            }    
        default:
            return state;
    }
}


