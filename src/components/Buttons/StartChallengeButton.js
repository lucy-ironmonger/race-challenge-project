import React from "react";
import "../../styles/ChallengeButton.scss";

// PARENT: USER IS NOT IN CHALLENGE

const StartChallengeButton = ({ handleChallengeStart }) => {
  return (
    <div className="start-challenges_button_container">
      <div className="start-challenges_button" onClick={handleChallengeStart}>
        Start New Challenge! 🚀
      </div>
    </div>
  );
};

export default StartChallengeButton;
