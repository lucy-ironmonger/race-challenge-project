import React from "react";
import Challenge from "./Challenge";

const ChallengesList = ({
  ConvertKmToM,
  onChallengeSelect,
  postUserChallengeRequest,
  isOn,
  savedChallenge,
  challengeData,
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
            savedChallenge={savedChallenge}
          />
        );
      })}
    </div>
  );
};

export default ChallengesList;
