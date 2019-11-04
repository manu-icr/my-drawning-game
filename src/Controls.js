import React, { useEffect, useState } from "react";
import { getPrediction } from "./helpers.js";

//function Controls({ theCanvas, model, labels }) {
const Controls = React.forwardRef((props, ref) => {
  let [prediction, setPrediction] = useState(""); // Sets default label to empty string.

  useEffect(() => {
    console.log(prediction);
  });

  function resetCanvas()
  {
    const canvas = props.theCanvas.current;
    const ctx = canvas.getContext("2d");
    ctx.fillRect(0, 0, canvas.height, canvas.width);
  }

  //React.useImperativeHandle(ref, () => ({

  return (
    <div>
      <button
        onClick={() => {
          resetCanvas();
        }}
      >
        Clear the canvas.
      </button>
      <button
        onClick={() =>
          getPrediction(props.theCanvas, props.model).then(prediction =>
            setPrediction(props.labels[prediction[0]])
          )
        }
      >
        Predict the drawing.
      </button>
    </div>
  );
});

export default Controls;
