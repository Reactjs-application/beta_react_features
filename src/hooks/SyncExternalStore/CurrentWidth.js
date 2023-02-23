import React, { useSyncExternalStore } from "react";

export default function CurrentWidth() {
  const width = useSyncExternalStore(subscribe, getSnapshot);

  return <p>Current width is : {width}</p>;
}

function subscribe(callback) {
  window.addEventListener("resize", callback);

  return () => {
    window.removeEventListener("resize", callback);
  };
}

function getSnapshot() {
  return window.innerWidth;
}
