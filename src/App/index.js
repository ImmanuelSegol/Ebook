import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import Editor from './Screens/Editor';
import Login from './Screens/Login';
import store from '../State';

class App extends Component {
  render() {
    return (
    <Provider store={store}> 
      <Router>
      <div>
          <Route exact path={'/'} component={Login}/>
          <Route exact path={'/Editor'} component={Editor}/>
      </div>
      </Router>
    </Provider>
    );
  }
}

export default App;

