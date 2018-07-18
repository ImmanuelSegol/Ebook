import * as actionTypes from '../../../../actionConstants';
/*
    itemsToDisplay:[
        {type:,link:}
    ]
*/
const initalState = {
    canEdit:true,
    sideBarIsVisibal: true,
    dataToRender:{
        type:null,
        src:null
    }
}

export default function editorUIReducer(state = initalState,action){
    switch(action.type){
        case actionTypes.TOGGLE_SIDEBAR_EDITOR:
            return {
                ...state,
                sideBarIsVisibal: !state.sideBarIsVisibal
            }
        case actionTypes.RENDER_MEDIA:
            return{
                ...state,
                dataToRender: action.payload
            }
        default:
            return state;
    }
}