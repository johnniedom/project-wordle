import React from "react";
{
  /*<div class="guess-results">
  <p class="guess">FIRST</p>
  <p class="guess">GUESS</p>
</div>
Acceptance Criteria:

A new component should be created, to render previous guesses.
When the user submits their guess, that value should be rendered within this new component.
There should be no key warnings in the console! */
}

function Body({ words }) {
  return (
    <div className="guess-results">
      {words.map(({ value, id }) => {
        return (
          <p className="guess" key={id}>
            {value}
          </p>
        );
      })}{" "}
    </div>
  );
}

export default Body;
