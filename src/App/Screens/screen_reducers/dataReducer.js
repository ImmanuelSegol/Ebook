import {bookTabs,bookSubTabs} from '../../../State/mocData';
import * as actionTypes from '../../../actionConstants';

const initalState = {
    tabs:bookTabs,
    subTab:bookSubTabs
};

export default function dataReducer(state = initalState,action){
    switch (action.type) {
        case actionTypes.ADD_BOOK_TAB:
            console.log(state.tabs);
            return {
                ...state,
                tabs: [
                    ...state.tabs.bookTabs,
                    action.payload
                ]
            }
        default:
            return state;
    }
}