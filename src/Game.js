import React from 'react';
import * as tf from "@tensorflow/tfjs";

import DrawingBoard from './DrawingBoard.js';
import Controls from './Controls.js';
import TextBlock from './TextBlock.js';

const model = tf.loadModel("./model/model.json");
const labels = require("./labels.json");

class Game extends React.Component {
  constructor(props)
  {
    super(props);
    this.ref = React.createRef();
  }
  
  render() {
    return (
      <div className="content">
        <div className="header">
          <TextBlock strings={['HEADER GAME']} />
        </div>
        <div className="middle">
          <div className="middleBox">
            <DrawingBoard ref={this.ref} />
          </div>
          <div className="middleBox">
            <TextBlock strings={['test', 'bla']} />
          </div>
        </div>
        <div className="footer">
          <div className="footerBox">
            <Controls theCanvas={this.ref} model={model} labels={labels} />
          </div>
        </div>
      </div>
    );
  }
}

export default Game;