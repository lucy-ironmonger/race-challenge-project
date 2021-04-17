import React from "react";
import "../../styles/ChallengeButton.scss";

// PARENT: USER IS NOT IN CHALLENGE

const StartChallengeButton = ({
  postUserChallengeRequest,
  selectedChallenge,
  challengeDistance,
  challengeDuration,
}) => {
  return (
    <div className="start-challenges_button_container">
      <div
        className="start-challenges_button"
        onClick={() =>
          postUserChallengeRequest(
            selectedChallenge,
            challengeDistance,
            challengeDuration
          )
        }
      >
        Start New Challenge! 🚀
      </div>
    </div>
  );
};

export default StartChallengeButton;
