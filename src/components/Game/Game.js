import React, { useState } from "react"; // Import useState from React library

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Form from "../Form";
import Body from "../Body/Body";
// Pick a random word on every page load.
const answer = sample(WORDS);

// To make debugging easier, we'll log the solution in the console.
console.info({ answer });
console.log(answer);

function Game() {
  const [words, setWords] = useState([]); // Use useState instead of React.useState
  return (
    <>
      <div className="game-wrapper">
        <Body words={words} />
      </div>
      <Form words={words} setWords={setWords} />
    </>
  );
}

export default Game;
