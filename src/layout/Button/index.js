import React from "react";
import "./button.css";

export function Button(props) {
  const createClass = "btn_wrapper " + props.className;

  return (
    <button
      className={createClass}
      style={{
        padding: props.padding || "auto",
        borderRadius: props.borderRadius || "auto",
        fontSize: props.size || "auto",
        fontWeight: props.weight || "auto",
      }}
    >
      {props.children}
    </button>
  );
}
