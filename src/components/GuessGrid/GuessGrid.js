import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : "cell";
  return <div className={className}>{letter}</div>;
}

function GuessGrid({ guessList, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((rowIdx) => {
        const result = checkGuess(guessList[rowIdx]?.guess, answer);

        return (
          <div className="guess" key={rowIdx}>
            {range(5).map((colIdx) => {
              const letterStatus = result && result[colIdx];
              return (
                <Cell
                  key={colIdx}
                  letter={letterStatus?.letter}
                  status={letterStatus?.status}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default GuessGrid;
