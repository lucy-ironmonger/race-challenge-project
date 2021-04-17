import React, { useState } from "react";
import Challenge from "./Challenge";

const ChallengesList = ({
  ConvertKmToM,
  onChallengeSelect,
  postUserChallengeRequest,
  isOn,
  selectedChallenge,
  challengeData,
  handleChallengeSelect,
  setPostChallengeDistance,
  setPostChallengeDuration,
}) => {
  const [clickedChallenge, setClickedChallenge] = useState();

  const handleClick = (challengeName) => {
    setClickedChallenge(challengeName);
  };

  return (
    <div>
      {challengeData.map((challenge) => {
        console.log(challenge);
        return (
          <Challenge
            challengeName={challenge.challengeName}
            challengeDistance={challenge.distance}
            challengeDuration={challenge.durationOfChallenge}
            key={challenge.challengeName}
            onChallengeSelect={onChallengeSelect}
            convertKmToM={ConvertKmToM}
            postUserChallengeRequest={postUserChallengeRequest}
            isOn={isOn}
            selectedChallenge={selectedChallenge}
            handleChallengeSelect={handleChallengeSelect}
            setPostChallengeDistance={setPostChallengeDistance}
            setPostChallengeDuration={setPostChallengeDuration}
            handleClick={handleClick}
            clicked={clickedChallenge === challenge.challengeName}
          />
        );
      })}
    </div>
  );
};

export default ChallengesList;
