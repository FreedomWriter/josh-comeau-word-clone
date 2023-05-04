import React from "react";

function GuessList(props) {
  const { guessList } = props;
  return (
    <ul className="guess-results">
      {guessList.map(({ id, guess }) => (
        <li key={id} className="guess">
          {guess}
        </li>
      ))}
    </ul>
  );
}

export default GuessList;
