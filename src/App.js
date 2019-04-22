import React, { Component } from 'react';
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import './toggle.css';

import Home from './containers/home';
import Footer from './components/Footer'

class App extends Component {
  
  render() {
    return (
      <Router>
          <div className="App">
            <div id="main">
              <Switch>
                <Route exact path="/" component={Home} />
              </Switch>
            </div>
            <Footer />
          </div>
      </Router>
    );
  }
}

export default hot(module)(App)
