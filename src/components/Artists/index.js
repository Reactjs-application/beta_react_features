import React, { useState } from "react";

const initialState = [
  { id: 0, name: "Marta Colvin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Louise Nevelson" },
];

let initialCounters = [0, 0, 0];

export default function Artists() {
  const [artists, setArtists] = useState(initialState);

  const handleDelete = (id) => {
    const newArtists = artists.filter((item) => {
      return item.id !== id;
    });
    setArtists(newArtists);
  };

  return (
    <div>
      <h1>Inspiring sculptors :</h1>
      <ul>
        {artists.map((artist) => {
          return (
            <li key={artist.id}>
              {artist.name}{" "}
              <button onClick={() => handleDelete(artist.id)}>delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export const CounterList = () => {
  const [counters, setCounters] = useState(initialCounters);

  const handleIncrease = (ctx) => {
    const newCounter = counters.map((counter, i) => {
      if (i === ctx) {
        return counter + 1;
      } else {
        return counter;
      }
    });

    setCounters(newCounter);
  };

  return (
    <>
      {counters.map((counter, ctx) => {
        return (
          <div key={ctx}>
            {counter} <button onClick={() => handleIncrease(ctx)}>+1</button>
          </div>
        );
      })}
    </>
  );
};
