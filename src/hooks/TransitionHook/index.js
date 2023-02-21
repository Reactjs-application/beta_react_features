import React, { useState, memo, useTransition } from "react";

var initialState = "about";

export default function TransitionHook() {
  const [isPending, startTransiton] = useTransition();
  const [tab, setTab] = useState(initialState);

  function selectTab(name) {
    startTransiton(() => {
      setTab(name);
    });
  }

  return (
    <div>
      <div style={{ display: "flex" }}>
        <TabButton
          isActive={tab === "about"}
          onClick={() => selectTab("about")}
        >
          About
        </TabButton>
        <TabButton
          isActive={tab === "contact"}
          onClick={() => selectTab("contact")}
        >
          contact
        </TabButton>
        <TabButton
          isActive={tab === "posts"}
          onClick={() => selectTab("posts")}
        >
          posts
        </TabButton>
      </div>

      {isPending ? (
        <p>Loading...</p>
      ) : (
        <>
          {tab === "about" && <AboutTab />}
          {tab === "contact" && <ContactTab />}
          {tab === "posts" && <PostsTab />}
        </>
      )}
    </div>
  );
}

function TabButton({ children, isActive, onClick }) {
  if (isActive) {
    return <p>{children}</p>;
  }

  return <button onClick={() => onClick()}>{children}</button>;
}

function ContactTab() {
  return (
    <>
      <p>You can find me online here:</p>
      <ul>
        <li>admin@mysite.com</li>
        <li>+123456789</li>
      </ul>
    </>
  );
}

function AboutTab() {
  return <p>Welcome to my profile!</p>;
}

export const PostsTab = memo(function PostsTab() {
  console.log("[ARTIFICIALLY SLOW] Rendering 500 <SlowPost />");

  let items = [];

  for (let i = 0; i < 500; i++) {
    items.push(<SlowPost key={i} index={i} />);
  }

  return <ul className="items">{items}</ul>;
});

function SlowPost({ index }) {
  let startTime = performance.now();

  while (performance.now() - startTime < 1) {}

  return <li className="item">Post # {index + 1}</li>;
}
