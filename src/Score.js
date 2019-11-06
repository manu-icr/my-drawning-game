import React, { useContext, useEffect } from 'react';
import TextBlock from './TextBlock.js';

import GameContext from './GameContext'
import text from './config/text.json';

function Score(props) {
  const game = useContext(GameContext)
  
  useEffect(() => {
    if(game.highScore < game.points)
    {
      this.props.reducerCallback();
    }
  });

  console.log("points = " + game.points);
  console.log("highScore = " + game.highScore);
  
  return (
    <div>
      <TextBlock strings={[text.score]} />
      {
        game.highScore > game.points ? (
          <div><TextBlock strings={["You gained " + game.points + " points."]} /></div>
        ) : (
            <div>
              <TextBlock strings={["You've set a new highscore:  " + game.points]} />
              <TextBlock strings={["Congratulation! You rock!"]} />
            </div>
          )}
    </div>
  );
}
export default Score;