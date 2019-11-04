import React from 'react';
import * as tf from "@tensorflow/tfjs";
import { withRouter  } from "react-router-dom";

import DrawingBoard from './DrawingBoard.js';
import Controls from './Controls.js';
import TextBlock from './TextBlock.js';
import Timer from './Timer.js';

import { CreateRoundList } from './helpers.js';


const model = tf.loadModel("./model/model.json");
const labels = require("./labels.json");
const TIMERSTART = 10;

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.timerRef = React.createRef();
    this.state = {
      round: 1,
      time: TIMERSTART,
      question: null
    };
    // save randomized label index in array for better gaming experience
    this.roundList = CreateRoundList(labels.length);
  }

  timeUp() {
    this.setState({
      question: null
    });
    this.resetTimer();
    this.setState({
      round: this.state.round + 1
    });
    if (this.state.round > labels.length) {
      // end game
      this.props.history.push("/score");
    }
    else {
      // start next round
      this.startRound();
    }
  }
  startRound = () => {
    this.timerRef.current.start();
    // set question to the next value in round list
    this.setState({
      question: labels[this.roundList[this.state.round - 1]].toUpperCase()
    })
  };

  resetTimer = () => {
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
                <TextBlock typeSpeed={10} strings={['Please paint a ' + this.state.question]} />
                :
                <div></div>
            }
            <div>
              <br />
              <Timer ref={this.timerRef} max={TIMERSTART} timeUp={() => this.timeUp()} />
            </div>
            <div className="btnStart">
              <button onClick={this.startRound}>Start game</button>
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

export default withRouter(Game);