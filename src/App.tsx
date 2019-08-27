import React, { Component } from 'react';
import { hot } from "react-hot-loader";
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './containers/home';
import Averages from './containers/averages';
import RoomMates from './containers/roommates';
import About from './containers/about';
import Header from './components/header';

import { Store } from './flux/store';
import {FilterReducer, useCombineReducers} from "./flux/reducer";


const App = () => {
    const [state, dispatch] = useCombineReducers({ filter: FilterReducer });

    return (
        <Store.Provider value={{ state, dispatch }}>
          <div className="App">
            <Header />
            <div id="main">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/roommates" component={RoomMates} />
                <Route path="/about" component={About} />
              </Switch>
            </div>
          </div>
        </Store.Provider>
    );
};

export default hot(module)(App)
