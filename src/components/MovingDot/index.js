import React, { useState } from "react";
import "./movingDot.css";

export default function MovingDot() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  return (
    <div className="bot">
      <div
        className="parentBox"
        onPointerMove={(e) => {
          setPosition({
            x: e.clientX,
            y: e.clientY,
          });
        }}
      >
        <div
          className="childBox"
          style={{
            position: "absolute",
            backgroundColor: "red",
            left: -10,
            top: -10,
            height: "10rem",
            width: "10rem",
            transform: `translate(${position.x}px ,${position.y}px)`,
          }}
        />
      </div>
    </div>
  );
}
