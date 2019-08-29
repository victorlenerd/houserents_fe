import * as React  from 'react';
import { hot } from "react-hot-loader";
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './containers/home';
import RoomMates from './containers/roommates';
import Header from './components/header';

import { Store } from './flux/store';
import { reducers, useCombineReducers } from "./flux/reducers";


const App = () => {
    const [state, dispatch] = useCombineReducers(reducers);

    return (
        <Store.Provider value={{ state, dispatch }}>
          <div className="App">
            <Header />
            <div id="main">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/roommates" component={RoomMates} />
              </Switch>
            </div>
          </div>
        </Store.Provider>
    );
};

export default hot(module)(App)
