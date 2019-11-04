import React from 'react';
import * as tf from "@tensorflow/tfjs";

import DrawingBoard from './DrawingBoard.js';
import Controls from './Controls.js';
import TextBlock from './TextBlock.js';
import Timer from './Timer.js';

const model = tf.loadModel("./model/model.json");
const labels = require("./labels.json");
const TIMERSTART = 5;

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.state = { round: 1, time: TIMERSTART };
    this.timerRef = React.createRef();

  }

  timeUp() {
    this.setState({
      round: this.state.round + 1
    });
    this.resetTimer();
    console.log('time up, round = ' + this.state.round);
  }
  startGame = () => {
    //console.log(this);
    this.timerRef.current.start();
  };

  resetTimer = () => {
    //console.log(this);
    this.timerRef.current.reset();
  };

  render() {
    return (
      <div className="content">
        <div className="header">
          <TextBlock strings={['HEADER GAME']} />
        </div>
        <div className="middle">
          <div className="middleBox">
            <DrawingBoard ref={this.canvasRef} />
          </div>
          <div className="middleBox">
            <TextBlock strings={['test', 'bla']} />
            <div>
              <Timer ref={this.timerRef} max={TIMERSTART} timeUp={() => this.timeUp()} />
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="footerBox">
            <Controls theCanvas={this.canvasRef} model={model} labels={labels} />
            <button onClick={this.startGame}>Start game</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Game;