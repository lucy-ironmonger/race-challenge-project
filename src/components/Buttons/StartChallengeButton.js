import React from "react";
import "../../styles/ChallengeButton.scss";

const StartChallengeButton = ({
  handlePostUserChallengeRequest,
  postSelectedChallenge,
  postChallengeDistance,
  postChallengeDuration,
}) => {
  return (
    <div className="start-challenges_button_container">
      <div
        className="start-challenges_button"
        onClick={() =>
          handlePostUserChallengeRequest(
            postSelectedChallenge,
            postChallengeDistance
          )
        }
      >
        Start Challenge!
      </div>
    </div>
  );
};

export default StartChallengeButton;
