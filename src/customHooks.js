import { useState, useContext, useEffect, useMemo } from 'react';
import GameContext from './GameContext'

function useTimer(max, timeUp) {
  const [count, setCount] = useState(max);
  const [isActive, setIsActive] = useState(false);

  function tick() {
    if (count < 1) {
      timeUp();
    }
    else if (count <= 0) {
      setCount(max)
    }
    else {
      setCount(count - 1);
    }
  }

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

  return { count, setCount, isActive, setIsActive };
}

function useHighScore() {
  const game = useContext(GameContext)
  console.log("game context insdie custom hook");
  console.log(game);
  const [points, setPoints] = useState(game.points);
  const [highScore, setHighScore] = useState(game.highScore);
  useEffect(() => {
    setPoints(game.points);
    if (game.points > 0 && highScore <= game.points) {
      setHighScore(game.points);
      game.highScore = game.points;
    }
    console.log("game.points = " + game.points);
    console.log("game.highScore = " + game.highScore);
  }, [highScore, game.points, game.highScore]);

  const values = useMemo(() => ({
    points,
    highScore
  }), [points, highScore ]);


  return [values];
}
export { useTimer, useHighScore };