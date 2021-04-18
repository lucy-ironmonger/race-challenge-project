import React, { useState } from "react";
import Challenge from "./Challenge";

// PARENT: USER NOT IN CHALLENGE

const ChallengesList = ({
  ConvertKmToM,
  onChallengeSelect,
  setUserChallengeDb,
  isOn,
  selectedChallenge,
  challengeData,
  handleChallengeSelect,
  setChallengeDistance,
  setChallengeDuration,
}) => {
  const [clickedChallenge, setClickedChallenge] = useState();

  const handleClick = (challengeName) => {
    setClickedChallenge(challengeName);
  };

  return (
    <div>
      {challengeData.map((challenge) => {
        return (
          <Challenge
            challengeName={challenge.challengeName}
            challengeDistance={challenge.distance}
            challengeDuration={challenge.duration}
            key={challenge.challengeName}
            onChallengeSelect={onChallengeSelect}
            convertKmToM={ConvertKmToM}
            setUserChallengeDb={setUserChallengeDb}
            isOn={isOn}
            selectedChallenge={selectedChallenge}
            handleChallengeSelect={handleChallengeSelect}
            setChallengeDistance={setChallengeDistance}
            setChallengeDuration={setChallengeDuration}
            handleClick={handleClick}
            clicked={clickedChallenge === challenge.challengeName}
          />
        );
      })}
    </div>
  );
};

export default ChallengesList;
