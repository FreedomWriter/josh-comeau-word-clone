import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessList from "../GuessList/GuessList";
import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// // Pick a random word on every pageload.
// const answer = sample(WORDS);
// // To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

const HappyBanner = ({ numOfGuesses, handleReset }) => {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>{numOfGuesses} guesses</strong>.
      </p>
      <button
        style={{ border: "1px solid white", padding: "8px", marginTop: "16px" }}
        onClick={handleReset}
      >
        New Game
      </button>
    </div>
  );
};

const SadBanner = ({ answer, handleReset }) => {
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      <button
        style={{ border: "1px solid white", padding: "8px", marginTop: "16px" }}
        onClick={handleReset}
      >
        New Game
      </button>
    </div>
  );
};

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [answer, setAnswer] = React.useState(sample(WORDS));
  const handleSubmitGuess = (nextGuess) => {
    setGuessList([...guessList, { id: Math.random(), guess: nextGuess }]);
  };
  const hasGuessedCorrectly = () => {
    return guessList.some((guess) => guess.guess === answer);
  };
  const isGameOver = () => {
    let result = false;
    if (guessList.length === NUM_OF_GUESSES_ALLOWED || hasGuessedCorrectly())
      result = true;
    return result;
  };

  const handleReset = () => {
    setGuessList([]);
    setAnswer(sample(WORDS));
  };

  return (
    <>
      {isGameOver() &&
        (hasGuessedCorrectly() ? (
          <HappyBanner
            numOfGuesses={guessList.length}
            handleReset={handleReset}
          />
        ) : (
          <SadBanner answer={answer} handleReset={handleReset} />
        ))}
      <GuessList guessList={guessList} />
      <Guess guessList={guessList} answer={answer} />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        disabled={isGameOver()}
      />
    </>
  );
}

export default Game;
