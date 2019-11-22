import React from 'react';
import TextBlock from './TextBlock.js';


import text from './config/text.json';
import { useHighScore } from './customHooks.js';


function Score(props) {
  
  const [values] = useHighScore();

  function ScoreDetail() {
    if (values.isNewHighScore) {
      console.log("isNewHighScore values");
      console.log(values);
      return (
        <div>
          <TextBlock strings={[text.highScore2 + values.highScore]} />
          <TextBlock strings={[text.highScore3]} />
        </div>
      );
    }
    else {
      
      console.log("score values");
      console.log(values);
      return (<div><TextBlock strings={[text.scorePoints.replace("[points]", values.points)]} /></div>);
    }
  }
  return (
    <div>
      <TextBlock strings={[text.score]} />
      <ScoreDetail />
    </div>
  );
}
export default Score;