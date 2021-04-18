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
  setUserChallengeDb,
  handleChallengeStart,
  handleChallengeSelect,
  setSelectedChallenge,

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
        setUserChallengeDb={setUserChallengeDb}
        setSelectedChallenge={setSelectedChallenge}
        selectedChallenge={selectedChallenge}
        challengeDistance={challengeDistance}
        challengeDuration={challengeDuration}
        handleChallengeStart={handleChallengeStart}
      />
      <div className="start-challenges-container_other">
        <h1>{selectedChallenge}</h1>
        <h1>Challenge Distance: {challengeDistance}</h1>
        <h1>Challenge Duration: {challengeDuration}</h1>
      </div>
      <KmToMButton toggleIsOn={toggleIsOn} isOn={isOn} />
      <ChallengesList
        challengeData={challengeData}
        ConvertKmToM={ConvertKmToM}
        setUserChallengeDb={setUserChallengeDb}
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
