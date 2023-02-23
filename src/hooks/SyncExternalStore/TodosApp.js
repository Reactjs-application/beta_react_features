import React, { useSyncExternalStore } from "react";

let nextId = 0;
let todos = [];
let listeners = [];

export default function TodosApp() {
  const currentTodo = useSyncExternalStore(subscribe, getSnapshot);

  return (
    <div>
      TodosApp
      <br />
      <button onClick={() => addTodo()}>Add Todo</button>
      <ul>
        {currentTodo?.map((item) => {
          return <li key={item.id}>{item.text}</li>;
        })}
      </ul>
    </div>
  );
}

function addTodo() {
  todos = [...todos, { id: nextId++, text: "Todo #" + nextId }];
  emitChange();
}

function subscribe(listener) {
  listeners = [...listeners, listener];
  return () => {
    listeners.filter((l) => {
      return l !== listener;
    });
  };
}

function getSnapshot() {
  return todos;
}

function emitChange() {
  for (let listener of listeners) {
    listener();
  }
}
