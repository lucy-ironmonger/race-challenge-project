import React, { useState } from "react";
import "../styles/SelectAChallenge.scss";
import ConvertKmToM from "../controllers/ConvertKmToM";
import axios from "axios";
import Navbar from "./NavBar";
import KmToMButton from "./KmToMButton";
import ChallengesList from "./ChallengesList";
import UserInChallenge from "./UserInChallenge";
import UserIsNotInChallenge from "./UserIsNotInChallenge";

const USER_DB_LINK = "http://localhost:4001/users";
const USER_CHALLENGE_DB_LINK = "http://localhost:4001/userchallenge";
let USER_NAME = window.localStorage.username;
let STRAVA_ID = window.localStorage.stravaId;

const SelectAChallenge = ({
  savedChallenge,
  handleChallengeSave,
  toggleIsOn,
  isOn,
  challengeData,
  inChallenge,
  setInChallenge,
}) => {
  // CHECK IF USER IS IN A CHALLENGE AND SET STATE
  const getRequestUserChallengeDb = async () => {
    await axios
      .get(`${USER_CHALLENGE_DB_LINK}/${STRAVA_ID}`)
      .then((res) => {
        if (res.status === 200) {
          console.log("Yes keen bean! You're in a challenge.");
          console.log(res.data.currentChallenge);
          let yourCurrentChallenge = res.data.currentChallenge;
          handleChallengeSave(yourCurrentChallenge);
          setInChallenge(true);
        }
        if (res.status === 201) {
          console.log("You ain't in a challenge mate. Join one!");
          setInChallenge(false);
        }
      })
      .catch((error) => {
        throw error;
      });
  };

  getRequestUserChallengeDb();

  // USER WANTS TO JOIN A CHALLENGE

  function postUserChallengeRequest(challengeName, challengeDistance) {
    console.log("New user challenge added to database");
    return axios({
      method: "post",
      url: USER_CHALLENGE_DB_LINK,
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
      {inChallenge && <UserInChallenge savedChallenge={savedChallenge} />}
      {!inChallenge && <KmToMButton toggleIsOn={toggleIsOn} isOn={isOn} /> && (
          <UserIsNotInChallenge />
        ) && (
          <ChallengesList
            challengeData={challengeData}
            ConvertKmToM={ConvertKmToM}
            postUserChallengeRequest={postUserChallengeRequest}
            handleChallengeSave={handleChallengeSave}
            isOn={isOn}
            savedChallenge={savedChallenge}
          />
        )}
    </div>
  );
};

export default SelectAChallenge;
