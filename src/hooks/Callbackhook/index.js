import React, { useState, useCallback } from "react";
import Todos from "./Todos";

let initialCount = 0;

export default function Callbackhook() {
  const [count, setCount] = useState(initialCount);
  const [todos, setTodos] = useState([]);

  function Increment() {
    setCount((count) => count + 1);
  }

  const handleAddTodo = useCallback(() => {
    setTodos((todos) => [...todos, "New Entry"]);
  }, []);

  return (
    <>
      <Todos todos={todos} handleAddTodo={handleAddTodo} />
      <div style={{ display: "flex", alignItems: "center" }}>
        <p> Count : {count}</p>
        <button onClick={Increment} style={{ marginLeft: "10px" }}>
          +
        </button>
      </div>
      <svg width="150" height="150" viewBox="0 0 150 150">
        <polygon points="60,30 90,90 30,90">
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 60 70"
            to="360 60 70"
            dur="10s"
            repeatCount="indefinite"
          />
        </polygon>
      </svg>
    </>
  );
}
