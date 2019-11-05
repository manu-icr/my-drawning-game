import React, { useReducer, useCallback } from 'react';
import Start from './Start.js';
import Score from './Score.js';
import Game from './Game.js';
import NavButton from './NavButton.js';
import pointReducer from './pointReducer.js';

import { GameProvider } from './GameContext'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';



const App = () => {
  const [state, dispatch] = useReducer(pointReducer, { points: 0, highScore: 0 });
  

  const changePoints = useCallback((type, timeLeft) => {
    dispatch({type: type, timeLeft: timeLeft });
  }, []);
  const changeHighscore = useCallback((type) => {
    dispatch({type: 'highscore'});
  }, []);

  return (
    <div>
      <GameProvider value={{ points: state.points, highScore: state.highScore}}>
        <Router >
          <Switch>
            <Route exact path="/">
              <Start />
              <NavButton title='Start' goto='game' />
            </Route>
            <Route path="/game">
              <Game reducerCallback={changePoints} />
            </Route>
            <Route path="/score">
              <Score reducerCallback={changeHighscore} />
              <NavButton title='Return to home' goto='' />
            </Route>
          </Switch>
        </Router>
      </GameProvider>
    </div>
  );
}


export default App;