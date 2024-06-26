import React from "react";
import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED as Num } from "../../constants";
import { range } from "../../utils";

function Body({ words, answer }) {
  const { ...value } = words;
  console.log(value, words);
  console.table(words.id);
  return (
    <div className="guess-results">
        {range(Num).map((num) => {
          return (
            <p key={num} className="guess">
            <Guess value={words[num]?.value} answer={answer}/>
          </p> 
        )
        })}{" "}
    </div>
  );
}

export default Body;
