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
    this.state = {
      round: 1,
      time: TIMERSTART,
      question: null
    };
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
    this.setState({
      question: 'asdf'
    })
  };

  resetTimer = () => {
    //console.log(this);
    this.timerRef.current.reset();
  };

  render() {
    return (
      <div className="content">
        <div className="header">
          <h1>Round #{this.state.round.toString().padStart(2, '0')}</h1>
        </div>
        <div className="middle">
          <div className="middleBox">
            <DrawingBoard ref={this.canvasRef} />
          </div>
          <div className="middleBox">
            <TextBlock strings={['test', 'bla']} />
            {
              this.state.question != null ?
                <TextBlock strings={['Please paint a' + this.state.question]} />
                :
                <div></div>
            }
            <div>
              <br />
              <Timer ref={this.timerRef} max={TIMERSTART} timeUp={() => this.timeUp()} />
            </div>
            <div className="btnStart">
              <button onClick={this.startGame}>Start game</button>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="footerBox">
            <Controls theCanvas={this.canvasRef} model={model} labels={labels} />
            
          </div>
        </div>
      </div>
    );
  }
}

export default Game;