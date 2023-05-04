import React from "react";

function GuessInput(props) {
  const { handleSubmitGuess, disabled } = props;
  const [guess, setGuess] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSubmitGuess(guess);
    setGuess("");
  };
  return (
    <form className="guess-input-wrapper" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
        required
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        disabled={disabled}
      />
    </form>
  );
}

export default GuessInput;
