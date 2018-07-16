import { applyMiddleware, createStore } from 'C:/Users/IAF/AppData/Local/Microsoft/TypeScript/2.9/node_modules/redux';
import rootReducer from './rootReducer';
import logger from 'redux-logger';


const store = createStore(
  rootReducer,
  applyMiddleware(logger)
)

export default store;