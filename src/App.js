import React, { Component } from 'react';
import { hot } from "react-hot-loader";
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './containers/home';
import Averages from './containers/averages';
import Roomie from './containers/roomie';
import Footer from './components/footer'
import Header from './components/header';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Header />
          <div id="main">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/roomie" component={Roomie} />
              <Route path="/averages" component={Averages} />
            </Switch>
          </div>
          <Footer />
        </div>
    );
  }
}

export default hot(module)(App)
