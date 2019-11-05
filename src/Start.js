import React from 'react';
import TextBlock from './TextBlock.js';

import { GameConsumer } from './GameContext'

import text from './config/text.json';

function Start(props) {
  return (
    <GameConsumer>
      {props => { return (
        <div>
          <TextBlock strings={[text.welcome]} />
          <TextBlock strings={[text.highScore.replace("[score]", props.highScore)]} />
        </div>
      )}}
    </GameConsumer>
  );
}
export default Start;