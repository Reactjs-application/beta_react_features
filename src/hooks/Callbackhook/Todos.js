import React, { memo } from "react";

function Todos({ todos, handleAddTodo }) {
  console.log("child render");
  return (
    <>
      <h1>My Todo</h1>
      {todos.map((item, ind) => {
        return <p key={ind}>{item + ind}</p>;
      })}

      <button onClick={handleAddTodo}>Add Todo</button>
    </>
  );
}

export default memo(Todos);
