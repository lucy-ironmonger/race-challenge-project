import React, { useEffect, useState } from "react";
import "../styles/SelectAChallenge.scss";
import ConvertKmToM from "../controllers/ConvertKmToM";
import axios from "axios";
import Navbar from "./NavBar";
import UserInChallenge from "./UserInChallenge";
import UserIsNotInChallenge from "./UserIsNotInChallenge";

const USER_DB_LINK = "http://localhost:4001/users";
const USER_CHALLENGE_DB_LINK = "http://localhost:4001/userchallenge";
let USER_NAME = window.localStorage.username;
let STRAVA_ID = window.localStorage.stravaId;

const SelectAChallenge = ({
  selectedChallenge,
  setSelectedChallenge,
  handleChallengeSelect,
  toggleIsOn,
  isOn,
  challengeData,
  inChallenge,
  setInChallenge,
}) => {
  // CHECK IF USER IS IN A CHALLENGE AND SET STATE

  // useEffect(() => {
  // const getRequestUserChallengeDb = async () => {
  //   await axios
  //     .get(`${USER_CHALLENGE_DB_LINK}/${STRAVA_ID}`)
  //     .then((res) => {
  //       if (res.status === 200) {
  //         console.log("Yes keen bean! You're in a challenge.");
  //         console.log(res.data.currentChallenge);
  //         let yourCurrentChallenge = res.data.currentChallenge;
  //         handleChallengeSelect(yourCurrentChallenge);
  //         setInChallenge(true);
  //         window.localStorage.setItem(IN_CHALLENGE, true);
  //       }
  //       if (res.status === 201) {
  //         console.log("You ain't in a challenge mate. Join one!");
  //         setInChallenge(false);
  //         window.localStorage.setItem(IN_CHALLENGE, false);
  //       }
  //     })
  //     .catch((error) => {
  //       throw error;
  //     });
  // };

  // getRequestUserChallengeDb();
  // }, []);

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

  const handlePostUserChallengeRequest = (challengeName, challengeDistance) => {
    if (selectedChallenge) {
      postUserChallengeRequest(challengeName, challengeDistance);
      setInChallenge(true);
      setSelectedChallenge(challengeName);
    }
  };

  return (
    <div>
      <Navbar />
      {inChallenge}
      {inChallenge && (
        <UserInChallenge
          selectedChallenge={selectedChallenge}
          setSelectedChallenge={setSelectedChallenge}
          inChallenge={inChallenge}
          setInChallenge={setInChallenge}
        />
      )}
      {!inChallenge && (
        <UserIsNotInChallenge
          isOn={isOn}
          toggleIsOn={toggleIsOn}
          challengeData={challengeData}
          ConvertKmToM={ConvertKmToM}
          handlePostUserChallengeRequest={handlePostUserChallengeRequest}
          handleChallengeSelect={handleChallengeSelect}
          selectedChallenge={selectedChallenge}
          setSelectedChallenge={setSelectedChallenge}
          setInChallenge={setInChallenge}
        />
      )}
    </div>
  );
};

export default SelectAChallenge;
