import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from '../State';

import Editor from './Screens/Editor';
import Login from './Screens/Login';
import Catalog from './Screens/Catalog';

class App extends Component {
  render() {
    return (
    <Provider store={store}> 
          <Router>
              <div>
                  <Route exact path={'/'} component={Login}/>
                  <Route exact path={'/editor'} component={Editor}/>
                  <Route exact path={'/catalog'} component={Catalog}/>
              </div>
          </Router>
    </Provider>
    );
  }
}

export default App;

