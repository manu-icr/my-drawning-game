import React, { useState, useEffect } from 'react';

import text from './config/text.json';


// custom hook for the timer
function useTimer(tick, max)
{
  const [count, setCount] = useState(max);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    var intervalID = null;
    if (isActive) {
      intervalID = setInterval(() => tick(), 1000);

    }
    else if (!isActive && count !== 0) {
      clearInterval(intervalID);
    }
    return () => clearInterval(intervalID);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive, count]);

  return { count, setCount, isActive, setIsActive};
}

const Timer = React.forwardRef((props, ref) => {
  
  const  timer = useTimer(tick, props.max);

  function tick() {
    if (timer.count < 1) {
      props.timeUp();
    }
    else if (timer.count <= 0) {
      timer.setCount(props.max)
    }
    else {
      timer.setCount(timer.count - 1);
    }
  }

  // let Game.js access the functions of this timer component
  React.useImperativeHandle(ref, () => ({
    start: () => {
      timer.setIsActive(true);
    },
    reset: () => {
      timer.setIsActive(false);
      timer.setCount(props.max);
    },
    stop: () => {
      timer.setIsActive(false);
    },
    toggle: () => {
      timer.setIsActive(!timer.isActive);
    },
    getRemaining: () => {
      return timer.count;
    }
  }));

  

  if (timer.isActive) {
    return (<div>{text.timer.replace('[seconds]', timer.count.toString().padStart(props.max.length, '0'))}</div>);
  }
  else {
    return (<div></div>);
  }

});

export default Timer;