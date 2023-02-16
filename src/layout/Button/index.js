import React from "react";
import "./button.css";

export function Button({
  children,
  padding,
  borderRadius,
  size,
  weight,
  onClick,
  disabled,
  className,
  margin,
}) {
  const createClass = "btn_wrapper " + className;

  return (
    <button
      className={createClass}
      style={{
        padding: padding || "auto",
        borderRadius: borderRadius || "auto",
        fontSize: size || "auto",
        fontWeight: weight || "auto",
        margin: margin || "auto",
      }}
      onClick={onClick || null}
      disabled={disabled || false}
    >
      {children}
    </button>
  );
}
