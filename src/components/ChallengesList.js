import React from "react";
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
  return (
    <div>
      {challengeData.map((challenge) => {
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
          />
        );
      })}
    </div>
  );
};

export default ChallengesList;
