import React, { forwardRef, useImperativeHandle, useState } from "react";

const TestingModel = forwardRef(function TestingModel(props, ref) {
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(
    ref,
    () => {
      return {
        OpenModel() {
          setIsOpen(true);
        },
      };
    },
    []
  );

  if (!isOpen) {
    return null;
  }

  return (
    <div className="Model">
      <h1>Model</h1>
      <p>This model use for only test hooks</p>
      <button onClick={() => setIsOpen(false)}>X</button>
    </div>
  );
});

export default TestingModel;
