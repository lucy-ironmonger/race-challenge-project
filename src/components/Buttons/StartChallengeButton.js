import React from "react";
import "../../styles/ChallengeButton.scss";

const StartChallengeButton = ({
  postUserChallengeRequest,
  postSelectedChallenge,
  postChallengeDistance,
  postChallengeDuration,
}) => {
  return (
    <div className="start-challenges_button_container">
      <div
        className="start-challenges_button"
        onClick={() =>
          postUserChallengeRequest(
            postSelectedChallenge,
            postChallengeDistance,
            postChallengeDuration
          )
        }
      >
        Start Challenge
      </div>
    </div>
  );
};

export default StartChallengeButton;
