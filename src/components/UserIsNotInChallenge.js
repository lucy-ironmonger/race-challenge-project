import React, { useState } from "react";
import KmToMButton from "./Buttons/KmToMButton";
import ChallengesList from "./ChallengesList";
import StartChallengeButton from "./Buttons/StartChallengeButton";

const UserIsNotInChallenge = ({
  toggleIsOn,
  isOn,
  challengeData,
  ConvertKmToM,
  handlePostUserChallengeRequest,
  handleChallengeStart,
  handleChallengeSelect,
  selectedChallenge,
  setSelectedChallenge,
  setInChallenge,
}) => {
  const [postChallengeDuration, setPostChallengeDuration] = useState("");
  const [postChallengeDistance, setPostChallengeDistance] = useState("");

  return (
    <>
      {!selectedChallenge && (
        <>
          <div className="start-challenges-container_other">
            <h1>
              Time for a new challenge? Select one, then double click to...
            </h1>
          </div>
        </>
      )}
      {selectedChallenge && (
        <>
          <div className="start-challenges-container_other">
            <h1>
              Time for a new challenge? Select one, then double click to...
            </h1>
            <h1>{selectedChallenge}</h1>
          </div>
        </>
      )}
      <StartChallengeButton
        handlePostUserChallengeRequest={handlePostUserChallengeRequest}
        postSelectedChallenge={selectedChallenge}
        postChallengeDuration={postChallengeDuration}
        postChallengeDistance={postChallengeDistance}
        setSelectedChallenge={setSelectedChallenge}
        setInChallenge={setInChallenge}
      />
      <KmToMButton toggleIsOn={toggleIsOn} isOn={isOn} />
      <ChallengesList
        challengeData={challengeData}
        ConvertKmToM={ConvertKmToM}
        handlePostUserChallengeRequest={handlePostUserChallengeRequest}
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
