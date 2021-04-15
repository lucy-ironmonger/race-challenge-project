import React from "react";
import "../../styles/ChallengeButton.scss";

const EndChallengeButton = ({ endChallenge }) => {
  return (
    <div className="start-challenges_button_container">
      <div className="end-challenges_button" onClick={endChallenge}>
        End Challenge! 😱
      </div>
    </div>
  );
};

export default EndChallengeButton;
