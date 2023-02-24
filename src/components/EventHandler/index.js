import React from "react";
import { createPortal } from "react-dom";

export default function EventHandler() {
  return (
    <div>
      <h2>EventHandler</h2>
      <button onMouseUp={() => console.log("onMouseUp")}>click</button>
      <progress value={75} max={100} />
      {createPortal(
        <p>This child is placed in the document body.</p>,
        document.body
      )}
    </div>
  );
}
