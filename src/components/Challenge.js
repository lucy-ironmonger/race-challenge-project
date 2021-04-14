import React from "react";

const Challenge = ({
  challengeName,
  challengeDistance,
  challengeDuration,
  onChallengeSelect,
  convertKmToM,
  isOn,
  postUserChallengeRequest,
  savedChallenge,
}) => {
  return (
    <div className="start-challenges-container">
      <h1>{challengeName}</h1>
      {isOn && (
        <h3>{`Distance: ${(challengeDistance / 1000).toFixed(2)} km`}</h3>
      )}
      {!isOn && <h3>{`Distance: ${convertKmToM(challengeDistance)} miles`}</h3>}
      <h3>Time to Complete: {challengeDuration} Days</h3>

      {savedChallenge && (
        <button
          onClick={() =>
            postUserChallengeRequest(
              challengeName,
              challengeDistance,
              challengeDuration
            )
          }
        >
          Select Challenge
        </button>
      )}

      {/* <button
        className="start-challenges_button"
        onClick={() => onChallengeSelect(challengeName)}
      >
        Start Challenge
      </button> */}
    </div>
  );
};

export default Challenge;
