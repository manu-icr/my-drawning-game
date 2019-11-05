import React from 'react';
import TextBlock from './TextBlock.js';

import { GameConsumer } from './GameContext'
import text from './config/text.json';

function Score(props) {
  return (
    <div>
      <TextBlock strings={[text.score]} />
      <GameConsumer>
        {props => {
          return props.highScore > props.currentPoints ? (
            <div><TextBlock strings={["You gained " + props.currentPoints + " points."]} /></div>
          ) : (
            <div>
              <TextBlock strings={["Set a new highscore:  " + props.currentPoints]} />
              <TextBlock strings={["Congratulation! You rock!"]} />
            </div>
            )
        }}
      </GameConsumer>
    </div>

  );
}
export default Score;