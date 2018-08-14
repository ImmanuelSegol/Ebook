import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import {store,persistor} from '../State';

import Editor from './Screens/Editor';
import Login from './Screens/Login';
import Catalog from './Screens/Catalog';

class App extends Component {
  render() {
    return (
    <Provider store={store}> 
      <PersistGate loading={null} persistor={persistor}>
          <Router>
              <div>
                  <Route exact path={'/'} component={Login}/>
                  <Route exact path={'/editor'} component={Editor}/>
                  <Route exact path={'/catalog'} component={Catalog}/>
              </div>
          </Router>
       </PersistGate>
    </Provider>
    );
  }
}

export default App;

