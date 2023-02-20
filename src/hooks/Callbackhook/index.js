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
    </>
  );
}
