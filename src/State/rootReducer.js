import {combineReducers} from 'redux';
import editorUIReducer from '../App/Screens/Editor/reducers';
import dataReducer from '../App/Screens/screen_reducers/dataReducer';
import modalReducer from '../App/Screens/modal_reducer';
import catalogUIReducer from '../App/Screens/Catalog/reducers'; 

const rootReducer = combineReducers({
    editorUi: editorUIReducer,
    catalogUi: catalogUIReducer,
    mockData: dataReducer,
    modals:modalReducer,
}) 

export default rootReducer;
//When other reducers are init then use combine reducers here, and remove rootReducer!