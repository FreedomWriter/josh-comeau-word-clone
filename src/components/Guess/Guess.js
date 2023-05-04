import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

function Guess({ guessList, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((_, rowIdx) => {
        const guess = guessList[rowIdx]?.guess;
        const guessStatus = checkGuess(guess, answer);

        return (
          <div className="guess" key={rowIdx}>
            {range(5).map((_, colIdx) => {
              const letterStatus = guessStatus && guessStatus[colIdx];
              return (
                <div
                  className={`cell ${letterStatus && letterStatus.status}`}
                  key={colIdx}
                >
                  {guess && guess[colIdx]}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Guess;
