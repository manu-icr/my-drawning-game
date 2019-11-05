import React, { useContext } from 'react';
import TextBlock from './TextBlock.js';

import GameContext from './GameContext'

import text from './config/text.json';

function Start(props) {
  const game = useContext(GameContext)
  console.log(game);
  return (
    <div>
      <TextBlock strings={[text.welcome]} />
      <TextBlock strings={[text.highScore.replace("[score]", game.state.highScore)]} />
    </div>
  );
}
export default Start;