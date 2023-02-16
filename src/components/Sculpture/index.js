import React, { useState } from "react";
import { Button } from "../../layout/Button";
import { SculptureList } from "../../assets";
import "./sculpture.css";

export default function Sculpture() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index >= 0) setIndex(index + 1);
  };

  const handlePre = () => {
    if (index >= 1) setIndex(index - 1);
  };

  let sculpture = SculptureList[index];

  return (
    <section className="sculpture">
      <div className="change_sculpture">
        <Button
          className="mainBtn"
          padding="0.5rem"
          borderRadius="4px"
          onClick={handlePre}
        >
          Pre
        </Button>
        <Button
          className="mainBtn"
          padding="0.5rem"
          borderRadius="4px"
          margin="0 0 0 10px"
          onClick={handleNext}
        >
          Next
        </Button>
      </div>
      <div className="details">
        <h2>
          <i>{sculpture.name} </i>
          by {sculpture.artist}
        </h2>
        <h3>
          ({index + 1} of {SculptureList?.length})
        </h3>
        <img src={sculpture.url} alt={sculpture.alt} />
        <p>{sculpture.description}</p>
      </div>
    </section>
  );
}
