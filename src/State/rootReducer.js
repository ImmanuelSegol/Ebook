import {combineReducers} from 'C:/Users/IAF/AppData/Local/Microsoft/TypeScript/2.9/node_modules/redux';
import editorUIReducer from '../App/Screens/Editor/reducers';
import dataReducer from '../App/Screens/screen_reducers/dataReducer';

import catalogUIReducer from '../App/Screens/Catalog/reducers'; 

const rootReducer = combineReducers({
    editorUi: editorUIReducer,
    catalogUi: catalogUIReducer,
    mockData: dataReducer,
}) 

export default rootReducer;
//When other reducers are init then use combine reducers here, and remove rootReducer!