import React, { Suspense, useState, lazy } from "react";

const ArtistPage = lazy(() => import("./ArtistPage"));

export default function ReactPackage() {
  return (
    <Suspense fallback={<BigSpinner />}>
      <Router />
    </Suspense>
  );
}

function Router() {
  const [page, setPage] = useState("/");

  function navigate(url) {
    setPage(url);
  }

  let content;

  if (page === "/") {
    content = <IndexPage navigate={navigate} />;
  } else if (page === "/the-beatles") {
    content = (
      <ArtistPage
        artist={{
          name: "The Beatles",
        }}
      />
    );
  }

  return <Layout>{content}</Layout>;
}

export function IndexPage({ navigate }) {
  return (
    <button onClick={() => navigate("/the-beatles")}>
      Open The Beatles artist page
    </button>
  );
}

export function Layout({ children }) {
  return (
    <div className="layout">
      <header className="header">Music Browser</header>
      <main>{children}</main>
    </div>
  );
}

function BigSpinner() {
  return <h2>🌀 Loading...</h2>;
}
