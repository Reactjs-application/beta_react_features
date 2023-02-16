import React from "react";
import Gallery from "../components/Gallery";
import PackingList from "../components/Packing";
import Sculpture from "../components/Sculpture";
import Message from "../components/Message";

export default function Home() {
  return (
    <section>
      <h1>Advance Learning components</h1>
      <Gallery />
      <PackingList />
      <Sculpture />
      <Message />
    </section>
  );
}
