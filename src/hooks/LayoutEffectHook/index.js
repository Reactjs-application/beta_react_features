import React, { useLayoutEffect, useState } from "react";

export default function LayoutEffectHook() {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    if (count === 0) setCount(5 + Math.random() * 40);
  }, [count]);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(0)}>Click</button>
    </div>
  );
}
