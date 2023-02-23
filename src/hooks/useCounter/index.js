import { useState } from "react";

export default function useCounter() {
  const [count, setCount] = useState(0);

  function Increment() {
    setCount(count + 1);
  }
  function Decrement() {
    setCount(count + 2);
  }

  return [count, Increment, Decrement];
}
