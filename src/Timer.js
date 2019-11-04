import React, { useState, useEffect } from 'react';

import text from './config/text.json';



const Timer = React.forwardRef((props, ref) => {

  const [count, setCount] = useState(props.max);
  const [isActive, setIsActive] = useState(false);

  function tick() {
    //console.log('tick');
    if (count < 1) {
      props.timeUp();
    }
    else if (count <= 0) {
      setCount(props.max)
    }
    else {
      setCount(count - 1);
    }
  }

  React.useImperativeHandle(ref, () => ({
    start: () => {
      //console.log('inside Timer start()');
      setIsActive(true);
    },
    reset: () => {
      //console.log('inside Timer start()');
      setIsActive(false);
      setCount(props.max);
    },
    stop:() => {
      setIsActive(false);
    },
    toggle:() => 
    {
      setIsActive(!isActive);
    }
  }));
  
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

  return (
    <div>{text.timer.replace('[seconds]', count.toString().padStart(props.max.length, '0'))}</div>
  );


});
export default Timer;