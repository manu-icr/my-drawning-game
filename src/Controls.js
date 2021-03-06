import React, { useEffect, useState } from "react";
import { getPrediction } from "./helpers.js";

const text = require("./config/text.json");

//function Controls({ theCanvas, model, labels }) {
const Controls = React.forwardRef((props, ref) => {
  let [prediction, setPrediction] = useState(""); // Sets default label to empty string.

  useEffect(() => {
    //makePrediction();
    // did not work obviously
    //console.log("effect " + prediction);
  });

  function resetCanvas() {
    const canvas = props.theCanvas.current;
    const ctx = canvas.getContext("2d");
    ctx.fillRect(0, 0, canvas.height, canvas.width);
  }

  function makePrediction() {
    getPrediction(props.theCanvas, props.model).then(newPrediction => {
      var _prediction = props.labels[newPrediction[0]];
      setPrediction(_prediction);
      props.childNotifyPrediction(_prediction);
    });
  }

  React.useImperativeHandle(ref, () => ({
    makePrediction: () => {
      makePrediction();
    },
    resetCanvas: () => {
      resetCanvas();
    },
    getPrediction: () => {
      return prediction;
    }

  }));

  return (
    <div>
      <button
        onClick={() => {
          resetCanvas();
        }} >
        {text.resetCanvas}
      </button>
    </div>
  );
});

export default Controls;
