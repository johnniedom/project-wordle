import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

{}
function Guess({ value, answer }) {
  const result = checkGuess(value, answer);
  console.log(answer);

  return (
    <>
      {range(5).map((num) => (
        <span className={`cell ${value && result[num].status}`} key={num}>
          {value ? result[num].letter : undefined}
          {console.log(value ? result[num].status : undefined)}
        </span>
      ))}
    </>
  );
}
export default Guess;
