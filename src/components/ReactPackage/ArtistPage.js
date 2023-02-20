import React, { Suspense, lazy } from "react";

const Albums = lazy(() => import("./Albums"));

export default function ArtistPage({ artist }) {
  return (
    <>
      <h1>{artist.name}</h1>
      <Biography />
      <Panel>
        <Suspense fallback={<Spinner />}>
          <Albums />
        </Suspense>
      </Panel>
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
