import React, { useState } from "react";
import "../styles/SelectAChallenge.scss";
import Challenge from "./Challenge";
import Navbar from "./NavBar";

const SelectAChallenge = (props) => {
  const [challenges, setChallenges] = useState(props.challenges);
  const [currentChallenge, setCurrentChallenge] = useState("");

  const handleChallengeSelect = (challenge) => {
    setCurrentChallenge(challenge);
  };

  return (
    <div>
      <Navbar />
      {currentChallenge && (
        <h1 className="start-challenge_header">
          You've selected
          <h2>{currentChallenge}</h2>
        </h1>
      )}
      {!currentChallenge && (
        <h1 className="start-challenge_header">Select a challenge below</h1>
      )}

      {challenges.map((challenge) => {
        return (
          <Challenge
            challengeName={challenge.challengeName}
            challengeDistance={challenge.distance}
            challengeDuration={challenge.durationOfChallenge}
            key={challenge.challengeName}
            onChallengeSelect={handleChallengeSelect}
          />
        );
      })}
    </div>
  );
};

export default SelectAChallenge;
