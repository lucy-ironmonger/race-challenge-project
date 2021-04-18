import React, { useState } from "react";
import KmToMButton from "./Buttons/KmToMButton";
import ChallengesList from "./ChallengesList";
import StartChallengeButton from "./Buttons/StartChallengeButton";

// PARENT : SELECT A CHALLENGE

const UserIsNotInChallenge = ({
  toggleIsOn,
  isOn,
  challengeData,
  ConvertKmToM,
  postUserChallengeRequest,
  handleChallengeStart,
  handleChallengeSelect,
  setSelectedChallenge,
  setInChallenge,
  selectedChallenge,
  challengeDistance,
  challengeDuration,
  setChallengeDistance,
  setChallengeDuration,
}) => {
  return (
    <>
      <div className="start-challenges-container_other">
        <h1>Time for a new challenge? Select one, then double click to...</h1>
      </div>
      <StartChallengeButton
        postUserChallengeRequest={postUserChallengeRequest}
        setSelectedChallenge={setSelectedChallenge}
        setInChallenge={setInChallenge}
        selectedChallenge={selectedChallenge}
        challengeDistance={challengeDistance}
        challengeDuration={challengeDuration}
      />
      <div className="start-challenges-container_other">
        <h1>{selectedChallenge}</h1>
      </div>
      <KmToMButton toggleIsOn={toggleIsOn} isOn={isOn} />
      <ChallengesList
        challengeData={challengeData}
        ConvertKmToM={ConvertKmToM}
        postUserChallengeRequest={postUserChallengeRequest}
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
