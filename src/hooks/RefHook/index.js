import React, { useState, useEffect, useRef, useCallback } from "react";

const RefHook = () => {
  const [text, setText] = useState("");

  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  const handleInput = useCallback((e) => {
    setText(e.target.value);
  }, []);

  return (
    <div>
      <input type="text" value={text} onChange={(e) => handleInput(e)} />
      <br />
      <p>count: {count.current}</p>
    </div>
  );
};

export default RefHook;
