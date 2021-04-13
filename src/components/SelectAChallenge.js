import React, { useState } from "react";
import "../styles/SelectAChallenge.scss";
import ConvertKmToM from "../controllers/ConvertKmToM";
import axios from "axios";
import Challenge from "./Challenge";
import Navbar from "./NavBar";

const USER_LINK = "http://localhost:4001/userchallenge";
let STRAVA_ID = window.localStorage.stravaId;
let USER_NAME = window.localStorage.username;

const SelectAChallenge = ({
  savedChallenge,
  handleChallengeSelect,
  toggleIsOn,
  isOn,
  challengesData,
}) => {
  const [challenges, setChallenges] = useState(challengesData);

  function postUserChallengeRequest(challengeName, challengeDistance) {
    console.log("New user challenge added to database");
    return axios({
      method: "post",
      url: USER_LINK,
      data: {
        stravaId: STRAVA_ID,
        username: USER_NAME,
        currentChallenge: challengeName,
        currentDistance: challengeDistance,
        remainingDistance: challengeDistance,
      },
    })
      .then((res) => console.log(res))
      .catch((error) => {
        throw error;
      });
  }

  return (
    <div>
      <Navbar />
      <div className="activities-list_button_container activity_background">
        <button
          className="activities-list_button_distance_metric"
          onClick={toggleIsOn}
        >
          {isOn ? "Set to miles" : "Set to kilometres"}
        </button>
      </div>
      {savedChallenge && (
        <h1 className="start-challenge_header">
          You've selected
          <h2>{savedChallenge}</h2>
        </h1>
      )}
      {!savedChallenge && (
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
            postUserChallengeRequest={postUserChallengeRequest}
            isOn={isOn}
          />
        );
      })}
    </div>
  );
};

export default SelectAChallenge;
