import React, { useState, useMemo } from "react";
import { useContextHook } from "../ContextHook";

export default function Memohook() {
  const { number } = useContextHook();

  const [num, setNum] = useState(0);
  const [isShow, setIsShow] = useState(false);

  function Increase() {
    setNum((pre) => pre + 1);
  }

  function toggle() {
    setIsShow(!isShow);
  }

  function calNumer(num) {
    for (let i = 0; i < 1000000; i++) {}
    return num;
  }

  const checkValue = useMemo(() => {
    return calNumer(num);
  }, [num]);

  return (
    <div>
      <button onClick={Increase}>Counter</button>
      <p>Number: {checkValue + number}</p>

      <button onClick={toggle}>
        {isShow ? "You clicked me" : "Click me plz"}
      </button>
    </div>
  );
}
