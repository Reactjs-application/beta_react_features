import React, { useEffect, useState } from "react";

export default function EffectHook() {
  const [Count, setCount] = useState(0);

  useEffect(() => {
    document.title = `count ${Count}`;
  }, [Count]);

  return (
    <div>
      <p>count-{Count}</p>
      <button onClick={() => setCount(Count + 1)}>count</button>
    </div>
  );
}
