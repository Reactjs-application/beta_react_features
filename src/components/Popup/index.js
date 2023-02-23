import React, { useRef } from "react";
import TestingModel from "../../models/TestingModel";

export default function Popup() {
  const ModelRef = useRef();

  const handleOpenModel = () => {
    ModelRef.current.OpenModel();
  };

  return (
    <div>
      <h1>Using useImperativeHandle</h1>
      <TestingModel ref={ModelRef} />
      <button onClick={handleOpenModel}>Open Model</button>
    </div>
  );
}
