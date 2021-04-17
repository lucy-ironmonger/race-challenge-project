import React from "react";
import "../../styles/ChallengeButton.scss";

// PARENT: USER IS NOT IN CHALLENGE

const StartChallengeButton = ({
  handlePostUserChallengeRequest,
  postSelectedChallenge,
  postChallengeDistance,
  postChallengeDuration,
  challengeDuration,
}) => {
  return (
    <div className="start-challenges_button_container">
      <div
        className="start-challenges_button"
        onClick={() =>
          handlePostUserChallengeRequest(
            postSelectedChallenge,
            postChallengeDistance,
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
