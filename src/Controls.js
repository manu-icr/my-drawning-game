import React, { useEffect, useState } from "react";
import { getPrediction } from "./helpers.js";

//function Controls({ theCanvas, model, labels }) {
const Controls = React.forwardRef((props, ref) => {
  let [prediction, setPrediction] = useState(""); // Sets default label to empty string.

  useEffect(() => {
    makePrediction();
    console.log("effect " + prediction);
  });

  function resetCanvas() {
    const canvas = props.theCanvas.current;
    const ctx = canvas.getContext("2d");
    ctx.fillRect(0, 0, canvas.height, canvas.width);
  }

  function makePrediction() {
    getPrediction(props.theCanvas, props.model).then(prediction =>
      {
        var _prediction = props.labels[prediction[0]];
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
        Clear the canvas.
      </button>
      <button
        onClick={() => {
          makePrediction();
        }} >
        Predict the drawing.
      </button>
    </div>
  );
});

export default Controls;
