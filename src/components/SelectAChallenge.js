import React, { useEffect, useState } from "react";
import "../styles/SelectAChallenge.scss";
import ConvertKmToM from "../controllers/ConvertKmToM";
import axios from "axios";
import Navbar from "./NavBar";
import UserInChallenge from "./UserInChallenge";
import UserIsNotInChallenge from "./UserIsNotInChallenge";

const SelectAChallenge = ({
  selectedChallenge,
  setSelectedChallenge,
  handleChallengeSelect,
  toggleIsOn,
  isOn,
  challengeData,
  inChallenge,
  setInChallenge,
  stravaId,
}) => {
  const USER_DB_LINK = "http://localhost:4001/users";
  const USER_CHALLENGE_DB_LINK = "http://localhost:4001/userchallenge";
  let USER_NAME = window.localStorage.username;
  let STRAVA_ID = window.localStorage.stravaId;
  let IN_CHALLENGE = "inChallenge";
  const CHALLENGE_SELECTED = "challengeSelected";
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
    console.log(
      "POST REQUEST postUserChallengeRequest to USERCHALLENGE | SELECT A CHALLENGE : New user challenge added to database"
    );
    window.localStorage.setItem(IN_CHALLENGE, true);
    window.localStorage.setItem(CHALLENGE_SELECTED, challengeName);
    console.log("Changed inChallenge on localStorage to true");

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
    if (window.localStorage.challengeSelected) {
      console.log(
        "START CHALLENGE BUTTON ONCLICK | FUNC handlePostUserChallengeRequest | SELECT A CHALLENGE"
      );
      postUserChallengeRequest(challengeName, challengeDistance);
      setInChallenge(true);
      setSelectedChallenge(challengeName);
    }
  };

  return (
    <div>
      <Navbar />
      {/* <UserInChallenge
        selectedChallenge={selectedChallenge}
        setSelectedChallenge={setSelectedChallenge}
        inChallenge={inChallenge}
        setInChallenge={setInChallenge}
        stravaId={stravaId}
      /> */}
      {window.localStorage.inChallenge === true ? (
        <UserInChallenge
          selectedChallenge={selectedChallenge}
          setSelectedChallenge={setSelectedChallenge}
          inChallenge={inChallenge}
          setInChallenge={setInChallenge}
          stravaId={stravaId}
        />
      ) : (
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
