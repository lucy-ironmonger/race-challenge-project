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
  challengeDuration,
}) => {
  const [postChallengeDuration, setChallengeDuration] = useState("");
  const [postChallengeDistance, setChallengeDistance] = useState("");

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
        challengeDuration={challengeDuration}
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
        setChallengeDistance={setChallengeDistance}
        setChallengeDuration={setChallengeDuration}
      />
    </>
  );
};

export default UserIsNotInChallenge;
