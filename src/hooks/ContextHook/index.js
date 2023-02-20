import React, { createContext, useContext, useState } from "react";

const ContextHook = createContext();

export function ContextProvider({ children }) {
  const [number] = useState(5);

  return (
    <ContextHook.Provider value={{ number }}>{children}</ContextHook.Provider>
  );
}

export function useContextHook() {
  return useContext(ContextHook);
}
