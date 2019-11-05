import React from 'react';
import Start from './Start.js';
import Score from './Score.js';
import Game from './Game.js';
import NavButton from './NavButton.js';

import { GameProvider } from './GameContext'


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';

const gameReducer = (state, action) => {
  switch (action) {
    case 'WIN':
      return state + 1
    case 'LOSE':
      return state - 1
    default:
      throw new Error()
  }
}

const points = {highScore: 42, currentPoints: 0};
class App extends React.Component {
  render() {
    return (
      <div>
        <GameProvider value={points}>
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
        </GameProvider>
      </div>
    );
  }
}

export default App;