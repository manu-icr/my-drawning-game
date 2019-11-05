
export default function pointReducer(state, action) {
  
  console.log("reducer called with [state,action] ");
  console.log(state);
  console.log(action);
  switch (action.type) {
    case 'win':
      return { points: state.points + action.timeLeft };
    case 'lose':
      return { points: state.points - 3 };
    case 'highscore':
      return { points: 0, highScore: state.points };
      default:
        throw new Error();
      }
}

