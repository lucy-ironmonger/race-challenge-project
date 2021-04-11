import React, { useState } from "react";
import "../styles/SelectAChallenge.scss";
import ConvertKmToM from "../controllers/ConvertKmToM";
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
      <div className="activities-list_button_container activity_background">
        <button
          className="activities-list_button_distance_metric"
          onClick={props.toggleIsOn}
        >
          {props.isOn ? "Set to miles" : "Set to kilometres"}
        </button>
      </div>
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
            convertKmToM={ConvertKmToM}
            isOn={props.isOn}
          />
        );
      })}
    </div>
  );
};

export default SelectAChallenge;
