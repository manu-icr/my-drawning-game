
export default function pointReducer(state, action) {

  switch (action.type) {
    case 'win':
      let newPoints = state.points + action.timeLeft;
      return { points: newPoints, highScore: (state.highScore < newPoints) ? newPoints : state.highScore };
    case 'lose':
      return { points: state.points - 3, highScore: state.highScore };
    case 'reset':
      return { points: 0, highScore: state.highScore };
    default:
      throw new Error();
  }
}

