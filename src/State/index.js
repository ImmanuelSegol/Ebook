import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './rootReducer';

import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk'; 


const persistConfig = {
  key: 'root',
  storage: storage,
  //stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
 };

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(pReducer,applyMiddleware(logger,ReduxThunk));
export const persistor = persistStore(store);

//export default store;