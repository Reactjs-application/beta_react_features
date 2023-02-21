// ReducerHook.js (calculation increment and decrement)
export function CalulateReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      var countInc = state.count + 1;
      return { count: countInc };
    case "DECREMENT":
      var countDec = state.count - 1;
      return { count: countDec };

    default:
      return state;
  }
}
