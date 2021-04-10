import React, { useState } from "react";
import "../styles/SelectAChallenge.scss";
import Challenge from "./Challenge";
import Navbar from "./NavBar";

const SelectAChallenge = (props) => {
  const [challenges, setChallenges] = useState(props.challenges);
  const [currentChallenge, setCurrentChallenge] = useState("");
  return (
    <div>
      <Navbar />
      <h1 className="start-challenge_header">Select a challenge below</h1>

      {challenges.map((challenge, index) => {
        return (
          <Challenge
            challengeName={challenge.challengeName}
            challengeDistance={challenge.distance}
            challengeDuration={challenge.durationOfChallenge}
            key={challenge.challengeName}
            setCurrentChallenge={setCurrentChallenge}
          />
        );
      })}
    </div>
  );
};

export default SelectAChallenge;
