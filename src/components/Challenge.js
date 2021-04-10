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
      <h3>Distance: {challengeDistance} Kilometers</h3>
      <h3>Time to Complete: {challengeDuration} Days</h3>

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
