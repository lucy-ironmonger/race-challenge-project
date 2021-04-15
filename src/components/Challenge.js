
import React, { useState, useEffect } from "react";

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

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const onClickChange = () => {
    if (click) {
      return "start-challenges-container-orange";
    } else if (!click) {
      return "start-challenges-container-white";
    }
    handleClick();
  };

  useEffect(() => {
    setPostChallengeDistance(challengeDistance);
    setPostChallengeDuration(challengeDuration);
  }, []);


  return (
    <div
      className={
        click
          ? "start-challenges-container-orange"
          : "start-challenges-container-white"
      }
    >
      <i className={onClickChange()} />
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
            onClick={() => handleClick();
          handleChallengeSelect(challengeName)}
          >
            Select Challenge
          </button>
        </div>
      )}

    </div>
  );
};

export default Challenge;
