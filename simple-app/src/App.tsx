import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import './App.css';
import { Route } from 'react-router';
import { Router } from 'react-router-dom';
import Login from './login';
import Welcome from './welcome';
import Error from './error';

const history = createBrowserHistory();
class App extends Component {

  render() {
    return (
      <div className="App">
        <Router history={history}>
          <React.Fragment>
            <h1>This demo is used for Robot Framework</h1>
            <a href="https://github.com/robotframework/WebDemo" target="_blank">Check example here</a>
            <Route exact={true} path={"/"} component={Login} />
            <Route exact={true} path={"/welcome"} component={Welcome} />
            <Route exact={true} path={"/error"} component={Error} />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
