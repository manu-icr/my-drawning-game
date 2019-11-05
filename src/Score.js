import React, { useContext, useReducer, useEffect } from 'react';
import TextBlock from './TextBlock.js';

import GameContext from './GameContext'
import text from './config/text.json';
import pointReducer from './pointReducer.js';

function Score(props) {
  const game = useContext(GameContext)
  const [state, dispatch] = useReducer(pointReducer, {points: game.points, highScore: 0});

  console.log("points = " + game.points);
  console.log("highScore = " + game.highScore);
  
  console.log("points = " + state.highScore);
  console.log("highScore = " + state.highScore);


  useEffect(() => {
    if(state.highScore > game.points)
    {
      state.highScore = state.points;
      dispatch({type: 'highscore'});
    }
  });
  return (
    <div>
      <TextBlock strings={[text.score]} />
      {
        game.highScore > game.points ? (
          <div><TextBlock strings={["You gained " + game.points + " points."]} /></div>
        ) : (
            <div>
              <TextBlock strings={["You've set a new highscore:  " + game.highScore]} />
              <TextBlock strings={["Congratulation! You rock!"]} />
            </div>
          )}
    </div>
  );
}
export default Score;