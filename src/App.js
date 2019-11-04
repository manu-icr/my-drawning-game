import React from 'react';
import Start from './Start.js';
import Score from './Score.js';
import Game from './Game.js';
import NavButton from './NavButton.js';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';



class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/">
              <Start />
              <NavButton title='Start' goto='game' />
            </Route>
            <Route path="/game">
              <Game />
            </Route>
            <Route path="/score">
              <Score />
              <NavButton title='Return to home' goto='' />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;