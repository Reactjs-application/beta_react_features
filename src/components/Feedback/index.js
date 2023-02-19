import React, { useState } from "react";

export default function FeedbackForm() {
  const [status, setStatus] = useState("trying");
  const [error, setError] = useState(null);
  const [text, setText] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      await sendMessage(text);
      setStatus("sent");
    } catch (error) {
      setError(error);
      setStatus("trying");
    }
  }

  return (
    <div>
      <h2>FeedbackForm</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          onChange={(e) => setText(e.target.value)}
          disabled={status === "sending"}
        />
        <br />
        <button
          type="submit"
          disabled={status === "sending" || text.length === 0}
          className={
            status === "sending"
              ? "not-allowed"
              : null || text.length === 0
              ? "not-allowed"
              : null
          }
        >
          send
        </button>
      </form>
      {status === "sending" && <p>sending...</p>}
      {error != null && <p>{error.message}</p>}
      {status === "sent" && <h3>Thanks for feedback!</h3>}
    </div>
  );
}

function sendMessage(text) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1000);
  });
}
