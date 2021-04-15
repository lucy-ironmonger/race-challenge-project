import React, { useState } from "react";

const Challenge = ({
  challengeName,
  challengeDistance,
  challengeDuration,
  onChallengeSelect,
  convertKmToM,
  isOn,
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

      <button
        className="start-challenges_button"
        onClick={() => {
          handleClick();
          onChallengeSelect(challengeName);
        }}
      >
        Start Challenge
      </button>
    </div>
  );
};

export default Challenge;
