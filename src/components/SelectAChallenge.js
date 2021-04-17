import React, { useEffect, useState } from "react";
import "../styles/SelectAChallenge.scss";
import ConvertKmToM from "../controllers/ConvertKmToM";
import axios from "axios";
import Navbar from "./NavBar";
import UserInChallenge from "./UserInChallenge";
import UserIsNotInChallenge from "./UserIsNotInChallenge";

// PARENT : APP

const SelectAChallenge = ({
  selectedChallenge,
  setSelectedChallenge,
  handleChallengeStart,
  handleChallengeSelect,
  toggleIsOn,
  isOn,
  challengeData,
  inChallenge,
  setInChallenge,
  stravaId,
  challengeDuration,
  challengeDistance,
  setChallengeDistance,
  setChallengeDuration,
}) => {
  const USER_DB_LINK = "http://localhost:4001/users";
  const USER_CHALLENGE_DB_LINK = "http://localhost:4001/userchallenge";
  let USER_NAME = window.localStorage.username;
  let STRAVA_ID = window.localStorage.stravaId;

  const CHALLENGE_SELECTED = "challengeSelected";
  let IN_CHALLENGE = "inChallenge";

  // RUNS ON EVERY RENDER
  // CHECKS IF THE USER IS ALREADY IN A CHALLENGE
  // IF THEY ARE, IT FEEDS THEIR DATA TO HANDLE CHALLENGE START TO UPDATE STATE ON THE NAME, CREATEDAT, DISTANCE, DURATION
  useEffect(() => {
    const getRequestUserChallengeDb = async () => {
      await axios
        .get(`${USER_CHALLENGE_DB_LINK}/${STRAVA_ID}`)
        .then((res) => {
          if (res.status === 200) {
            console.log("You're already in a challenge.", res.data);
            handleChallengeStart(
              res.data.currentChallenge,
              res.data.createdAt,
              res.data.distance,
              res.data.duration
            );
          }
          if (res.status === 201) {
            setInChallenge(false);
            window.localStorage.setItem(IN_CHALLENGE, false);
          }
        })
        .catch((error) => {
          throw error;
        });
    };
    getRequestUserChallengeDb();
  });

  // ADDS A USER TO JOIN A CHALLENGE
  // DOESN'T NEED CREATED AT AS THIS IS ADDED ON MYSQL
  // SENDS THE CHALLENGE NAME, DISTANCE AND DURATION TO THE DB

  function postUserChallengeRequest(
    challengeName,
    challengeDistance,
    challengeDuration
  ) {
    if (window.localStorage.challengeSelected) {
      console.log(`You've joined the ${challengeName} challenge!`);
      setChallengeDistance();
      window.localStorage.setItem(IN_CHALLENGE, true);
      window.localStorage.setItem(CHALLENGE_SELECTED, challengeName);

      return axios({
        method: "post",
        url: USER_CHALLENGE_DB_LINK,
        data: {
          stravaId: STRAVA_ID,
          username: USER_NAME,
          currentChallenge: challengeName,
          distance: challengeDistance,
          duration: challengeDuration,
        },
      })
        .then((res) => console.log(res))
        .catch((error) => {
          throw error;
        });
    }
  }

  // const postUserChallengeRequest = (
  //   challengeName,
  //   challengeDistance,
  //   challengeDuration
  // ) => {
  //   if (window.localStorage.challengeSelected) {
  //     console.log(
  //       "START CHALLENGE BUTTON ONCLICK | FUNC postUserChallengeRequest | SELECT A CHALLENGE"
  //     );
  //     postUserChallengeRequest(
  //       challengeName,
  //       challengeDistance,
  //       challengeDuration
  //     );
  //     setInChallenge(true);
  //     setSelectedChallenge(challengeName);
  //   }
  // };

  return (
    <div>
      <Navbar />
      {inChallenge === true ? (
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
          postUserChallengeRequest={postUserChallengeRequest}
          handleChallengeStart={handleChallengeStart}
          handleChallengeSelect={handleChallengeSelect}
          selectedChallenge={selectedChallenge}
          setSelectedChallenge={setSelectedChallenge}
          setInChallenge={setInChallenge}
          challengeDistance={challengeDistance}
          challengeDuration={challengeDuration}
          setChallengeDistance={setChallengeDistance}
          setChallengeDuration={setChallengeDuration}
        />
      )}
    </div>
  );
};

export default SelectAChallenge;
