import React from "react";
import CurrentWidth from "./CurrentWidth";
import TodosApp from "./TodosApp";

export default function SyncExternalStore() {
  return (
    <div>
      <CurrentWidth />
      <TodosApp />
    </div>
  );
}
