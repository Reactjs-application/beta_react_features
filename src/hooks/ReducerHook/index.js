import React, { useReducer } from "react";
import { CalulateReducer } from "../../reducers";
import { IncrementAction, DecremtnAction } from "../../actions";

var initalState = {
  count: 0,
};

export default function ReducerHook() {
  const [state, dispatch] = useReducer(CalulateReducer, initalState);

  return (
    <div>
      <p>Count- {state.count}</p>
      <button onClick={() => dispatch(IncrementAction())}>Inc</button>
      <button onClick={() => dispatch(DecremtnAction())}>Dec</button>
    </div>
  );
}
