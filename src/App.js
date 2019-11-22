import React, { useContext, useReducer, useCallback } from 'react';
import Start from './Start.js';
import Score from './Score.js';
import Game from './Game.js';
import NavButton from './NavButton.js';
import pointReducer from './pointReducer.js';

import GameContext, { GameProvider } from './GameContext'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';



const App = () => {
  const [state, dispatch] = useReducer(pointReducer, { points: 0});
  const game = useContext(GameContext)

  
  const changePoints = useCallback((timeLeft) => {
    dispatch({ type: 'win', timeLeft: timeLeft });
    console.log("highscore = " + game.highScore)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);
  const timeUp = useCallback(() => {
    dispatch({ type: 'lose' });
    console.log("highscore = " + game.highScore)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const resetPoints = useCallback(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    dispatch({ type: 'reset' });
    console.log("highscore = " + game.highScore)
  });

  return (
    <div>
      <GameProvider value={{ points: state.points, highScore: game.highScore }}>
        <Router >
          <Switch>
            <Route exact path="/">
              <Start />
              <NavButton title='Start' goto='game' />
            </Route>
            <Route path="/game">
              <Game changePointsCallback={changePoints} timeUpCallback={timeUp} resetPointsCallback={resetPoints} points={state.points} />
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


export default App;