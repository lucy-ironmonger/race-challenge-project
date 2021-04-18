import React from "react";
import "../../styles/ChallengeButton.scss";

// PARENT : USER IN CHALLENGE

const EndChallengeButton = ({ handleEndChallenge }) => {
  return (
    <div className="start-challenges_button_container">
      <div className="end-challenges_button" onClick={handleEndChallenge}>
        End Current Challenge 😱
      </div>
    </div>
  );
};

export default EndChallengeButton;
