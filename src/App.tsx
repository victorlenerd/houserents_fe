import React, { Suspense, lazy, Component } from 'react';
import { hot } from "react-hot-loader";
import { Switch, Route } from 'react-router-dom';
import './App.css';

const Home = lazy(() => import('./containers/home'));
const Averages = lazy(() => import('./containers/averages'));
const RoomMates = lazy(() => import('./containers/roommates'));

import Footer from './components/footer'
import Header from './components/header';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Header />
          <div id="main">
              <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/roommates" component={RoomMates} />
                  <Route path="/averages" component={Averages} />
                </Switch>
              </Suspense>
          </div>
          <Footer />
        </div>
    );
  }
}

export default hot(module)(App)
