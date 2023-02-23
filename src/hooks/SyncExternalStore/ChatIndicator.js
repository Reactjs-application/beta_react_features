import React, { useSyncExternalStore } from "react";

export default function ChatIndicator() {
  const isOnline = useSyncExternalStore(
    subscribe,
    getSnapshort,
    getServerSnapshort
  );

  return <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>;
}

function subscribe(callback) {
  window.addEventListener("online", callback);

  return () => {
    window.removeEventListener("online", callback);
  };
}

function getServerSnapshort() {
  return true;
}

function getSnapshort() {
  return navigator.onLine;
}
