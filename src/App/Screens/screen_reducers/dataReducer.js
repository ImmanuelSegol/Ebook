import {bookTabs,bookSubTabs} from '../../../State/mocData';

const initalState = {
    tabs:bookTabs,
    subTab:bookSubTabs
};

export default function dataReducer(state = initalState,action){
    switch (action.type) {
        default:
            return state;
    }
}