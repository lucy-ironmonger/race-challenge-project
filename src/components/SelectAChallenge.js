import React, { useState } from "react";
import "../styles/SelectAChallenge.scss";
import ConvertKmToM from "../controllers/ConvertKmToM";
import axios from "axios";
import Navbar from "./NavBar";
import KmToMButton from "./KmToMButton";
import ChallengesList from "./ChallengesList";

const USER_LINK = "http://localhost:4001/userchallenge";
let STRAVA_ID = window.localStorage.stravaId;
let USER_NAME = window.localStorage.username;

const SelectAChallenge = ({
  savedChallenge,
  handleChallengeSelect,
  toggleIsOn,
  isOn,
  challengeData,
}) => {
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
      <KmToMButton toggleIsOn={toggleIsOn} isOn={isOn} />
      <ChallengesList
        challengeData={challengeData}
        ConvertKmToM={ConvertKmToM}
        postUserChallengeRequest={postUserChallengeRequest}
        onChallengeSelect={handleChallengeSelect}
        isOn={isOn}
        savedChallenge={savedChallenge}
      />
    </div>
  );
};

export default SelectAChallenge;
