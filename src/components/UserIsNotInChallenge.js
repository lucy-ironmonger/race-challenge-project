import React, { useState } from "react";
import KmToMButton from "./Buttons/KmToMButton";
import ChallengesList from "./ChallengesList";
import StartChallengeButton from "./Buttons/StartChallengeButton";

const UserIsNotInChallenge = ({
  toggleIsOn,
  isOn,
  challengeData,
  ConvertKmToM,
  postUserChallengeRequest,
  handleChallengeSelect,
  selectedChallenge,
  setSelectedChallenge,
}) => {
  const [postChallengeDuration, setPostChallengeDuration] = useState("");
  const [postChallengeDistance, setPostChallengeDistance] = useState("");

  return (
    <>
      {!selectedChallenge && (
        <>
          <div className="start-challenges-container_other">
            <h1>Select a challenge below.</h1>
            <h1>Start when ready!</h1>
          </div>
        </>
      )}
      {selectedChallenge && (
        <>
          <div className="start-challenges-container_other">
            <h1>{selectedChallenge}</h1>
          </div>
        </>
      )}
      <StartChallengeButton
        postUserChallengeRequest={postUserChallengeRequest}
        postSelectedChallenge={selectedChallenge}
        postChallengeDuration={postChallengeDuration}
        postChallengeDistance={postChallengeDistance}
      />
      <KmToMButton toggleIsOn={toggleIsOn} isOn={isOn} />
      <ChallengesList
        challengeData={challengeData}
        ConvertKmToM={ConvertKmToM}
        postUserChallengeRequest={postUserChallengeRequest}
        handleChallengeSelect={handleChallengeSelect}
        isOn={isOn}
        selectedChallenge={selectedChallenge}
        setSelectedChallenge={setSelectedChallenge}
        setPostChallengeDistance={setPostChallengeDistance}
        setPostChallengeDuration={setPostChallengeDuration}
      />
    </>
  );
};

export default UserIsNotInChallenge;
