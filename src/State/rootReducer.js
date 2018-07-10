import {combineReducers} from 'redux';
import editorUIReducer from '../App/Screens/Editor/reducers/editorUIReducer';
import catalogUIReducer from '../App/Screens/Catalog/reducers'; 
const rootReducer = combineReducers({
    editorUi: editorUIReducer,
    catalogUi: catalogUIReducer
}) 

export default rootReducer;
//When other reducers are init then use combine reducers here, and remove rootReducer!