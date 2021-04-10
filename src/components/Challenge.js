import React from "react";

const Challenge = ({
  challengeName,
  challengeDistance,
  challengeDuration,
  onChallengeSelect,
}) => {
  return (
    <div className="start-challenges-container">
      <h1>{challengeName}</h1>
      <p>Distance: {challengeDistance} Kilometers</p>
      <p>Time to Complete: {challengeDuration} Days</p>

      <button
        className="start-challenges_button"
        onClick={() => onChallengeSelect(challengeName)}
      >
        Start Challenge
      </button>
    </div>
  );
};

export default Challenge;
