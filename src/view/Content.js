import React from "react";
import Artists, { CounterList } from "../components/Artists";
import Bucket from "../components/Bucket";

export default function Content() {
  return (
    <>
      <Artists />
      <CounterList />
      <Bucket />
    </>
  );
}
