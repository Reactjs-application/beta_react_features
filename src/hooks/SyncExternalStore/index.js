import React from "react";
import CurrentWidth from "./CurrentWidth";
import TodosApp from "./TodosApp";
import ChatIndicator from "./ChatIndicator";

export default function SyncExternalStore() {
  return (
    <div>
      <CurrentWidth />
      <TodosApp />
      <ChatIndicator />
    </div>
  );
}
