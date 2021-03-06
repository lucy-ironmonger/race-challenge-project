import React, { useState, useEffect } from "react";

// PARENT : CHALLENGE LIST

const Challenge = ({
  challengeName,
  challengeDistance,
  challengeDuration,
  handleChallengeSelect,
  convertKmToM,
  isOn,
  setUserChallengeDb,
  inChallenge,
  selectedChallenge,
  setChallengeDistance,
  setChallengeDuration,
  clicked,
  handleClick,
}) => {
  // const [click, setClick] = useState(false);
  // const handleClick = () => setClick(!click);

  //

  // useEffect(() => {
  //   setChallengeDistance(challengeDistance);
  //   setChallengeDuration(challengeDuration);
  // });

  return (
    <div
      className={
        clicked
          ? "select-challenges-container-orange"
          : "select-challenges-container-white"
      }
    >
      {/* <i className={onClickChange()} /> */}
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
            onClick={() => {
              handleClick(challengeName);
              handleChallengeSelect(
                challengeName,
                challengeDistance,
                challengeDuration
              );
            }}
          >
            Select Challenge
          </button>
        </div>
      )}
    </div>
  );
};

export default Challenge;
