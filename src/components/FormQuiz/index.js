import React, { useState } from "react";

export default function FormQuiz() {
  const [status, setStatus] = useState("typing"); //typing', 'submitting', or 'success'
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);

  if (status === "success") {
    return <h1>That's right!</h1>;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    try {
      await submitForm(answer);
      setStatus("success");
    } catch (error) {
      setStatus("typing");
      setError(error);
    }
  }

  return (
    <div>
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          disabled={status === "submitting"}
        />
        <br />
        <button
          type="submit"
          disabled={answer.length === 0 || status === "submitting"}
        >
          submit
        </button>
        <br />
        {error != null && error.message}
      </form>
    </div>
  );
}

function submitForm(answer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let checkAnswer = answer.toLowerCase() === "lima";
      if (checkAnswer) {
        resolve();
      } else {
        reject(new Error("Good guess but a wrong answer. Try again!"));
      }
    }, 1500);
  });
}
