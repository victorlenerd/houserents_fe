import React, { Component } from 'react';
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import './toggle.css';

import Header from './components/header';
import Map from './components/map';

import ByAddress from './containers/byaddress';
import ByAreas from './containers/byareas';
import Area from './containers/area';

class App extends Component {
  
  render() {
    return (
      <Router>
          <div className="App">
            <Header />
            <div id="main">
              <Switch>
                <Route exact path="/" component={ByAddress} />
                <Route path="/areas" component={ByAreas} />
                <Route path="/area/:areaId" component={Area} />
              </Switch>
            </div>
          </div>
      </Router>
    );
  }
}

export default hot(module)(App)
