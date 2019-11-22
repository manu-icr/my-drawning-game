
export default function pointReducer(state, action) {

  switch (action.type) {
    case 'win':
      let newPoints = state.points + action.timeLeft;
      console.log("reducer win, points = " + newPoints);
      return { points: newPoints};
    case 'lose':
      console.log("reducer lose, points = " + (state.points - 3));
      return { points: state.points - 3};
    case 'reset':
      console.log("reducer reset");
      return { points: 0 };
    default:
      throw new Error();
  }
}

