import {books,bookTabs,bookSubTabs} from '../../../State/mocData';
import * as actionTypes from '../../../actionConstants';

const initalState = {
    ebooks:books,
    tabs:bookTabs,
    subTab:bookSubTabs
};

export default function dataReducer(state = initalState,action){
    switch (action.type) {
        case actionTypes.ADD_BOOK_TAB:
            //console.log(action.payload);
            return {
                ...state,
                tabs:[
                    ...state.tabs,
                    action.payload,
                ]
            };
        case actionTypes.REMOVE_BOOK_TAB:
            //alert(action.payload);
            return {
                ...state,
                tabs:state.tabs.filter(tab => tab.id !== action.payload),
                subTab:state.subTab.filter(sub => sub.parentId !== action.payload)
            }
        default:
            return state;
    }
}