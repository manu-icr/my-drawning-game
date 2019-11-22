import React from 'react';

import text from './config/text.json';
import {useTimer} from './customHooks.js';


const Timer = React.forwardRef((props, ref) => {

  const timer = useTimer(props.max, props.timeUp);

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
export { useTimer };