import React from "react";

function GuessInput(props) {
  const { handleSubmitGuess, disabled } = props;
  const [guess, setGuess] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ guess });
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
        pattern="\w{5,5}"
        disabled={disabled}
      />
    </form>
  );
}

export default GuessInput;
