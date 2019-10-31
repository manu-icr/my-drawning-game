import React from 'react';
import DrawingBoard from './DrawingBoard.js';
import Controls from './Controls.js';
import TextBlock from './TextBlock.js';


import './App.css';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.model = props.model;
    this.labels = props.model;
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
            <Controls theCanvas={this.ref} model={this.model} labels={this.labels} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;