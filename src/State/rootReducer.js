import {combineReducers} from 'redux';
import editorUIReducer from '../App/Screens/Editor/reducers/editorUIReducer';

const rootReducer = combineReducers({
    editorUi: editorUIReducer,
}) 

export default rootReducer;
//When other reducers are init then use combine reducers here, and remove rootReducer!