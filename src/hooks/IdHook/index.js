import React, { useId } from "react";

export default function IdHook() {
  const id = useId();

  return <div>{id}</div>;
}
