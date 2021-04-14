import React, { useEffect } from "react";

const Challenge = ({
  challengeName,
  challengeDistance,
  challengeDuration,
  handleChallengeSelect,
  convertKmToM,
  isOn,
  postUserChallengeRequest,
  inChallenge,
  selectedChallenge,
  setPostChallengeDistance,
  setPostChallengeDuration,
}) => {
  useEffect(() => {
    setPostChallengeDistance(challengeDistance);
    setPostChallengeDuration(challengeDuration);
  }, []);

  return (
    <div className="start-challenges-container">
      <h1>{challengeName}</h1>
      {isOn && (
        <h3>{`Distance: ${(challengeDistance / 1000).toFixed(2)} km`}</h3>
      )}
      {!isOn && <h3>{`Distance: ${convertKmToM(challengeDistance)} miles`}</h3>}
      <h3>Time to Complete: {challengeDuration} Days</h3>

      {!inChallenge && (
        <div className="select-challenges_button_container">
          <button
            className="select-challenges_button"
            onClick={() => handleChallengeSelect(challengeName)}
          >
            Select Challenge
          </button>
        </div>
      )}
    </div>
  );
};

export default Challenge;
