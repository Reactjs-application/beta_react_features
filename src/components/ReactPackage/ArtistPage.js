import React, { Suspense } from "react";
import Albums from "./Albums";

export default function ArtistPage({ artist }) {
  return (
    <>
      <h1>{artist.name}</h1>
      <Biography />
      <Suspense fallback={<Spinner />}>
        <Panel>
          <Albums />
        </Panel>
      </Suspense>
    </>
  );
}

export function Panel({ children }) {
  return <section className="panel">{children}</section>;
}

function Biography() {
  return (
    <p>
      The Beatles were an English rock band, formed in Liverpool in 1960, that
      comprised John Lennon, Paul McCartney, George Harrison and Ringo Starr.
    </p>
  );
}

function Spinner() {
  console.log("Loading...");
  return <h2>🌀 Loading...</h2>;
}
