import React, { useContext } from 'react';
import TextBlock from './TextBlock.js';

import GameContext from './GameContext'
import text from './config/text.json';

function Score(props) {
  const game = useContext(GameContext)
  return (
    <div>
      <TextBlock strings={[text.score]} />
      {
        game.state.highScore > game.state.currentPoints ? (
          <div><TextBlock strings={["You gained " + game.state.currentPoints + " points."]} /></div>
        ) : (
            <div>
              <TextBlock strings={["Set a new highscore:  " + game.state.currentPoints]} />
              <TextBlock strings={["Congratulation! You rock!"]} />
            </div>
          )}
    </div>
  );
}
export default Score;