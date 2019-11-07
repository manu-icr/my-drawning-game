import React, { useContext, useEffect } from 'react';
import TextBlock from './TextBlock.js';

import GameContext from './GameContext'
import text from './config/text.json';

function Score(props) {
  const game = useContext(GameContext)

  useEffect(() => {
    if (game.highScore < game.points) {
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
          <div><TextBlock strings={[text.scorePoints.replace("[points]",game.points)]} /></div>
        ) : (
            <div>
              <TextBlock strings={[text.highScore2 + game.points]} />
              <TextBlock strings={[text.highScore3]} />
            </div>
          )}
    </div>
  );
}
export default Score;