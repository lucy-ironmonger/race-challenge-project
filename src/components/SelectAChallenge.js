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
  stravaId,
  challengeDuration,
  challengeDistance,
  setChallengeDistance,
  setChallengeDuration,
  activeChallenge,
  setActiveChallenge,
  setUserChallengeDb,
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
  // useEffect(() => {
  //   const getRequestUserChallengeDb = async () => {
  //     console.log("fired!");
  //     await axios
  //       .get(`${USER_CHALLENGE_DB_LINK}/${STRAVA_ID}`)
  //       .then((res) => {
  //         if (res.status === 200) {
  //           console.log(
  //             `You're already in the ${selectedChallenge} challenge.`,
  //             res.data
  //           );
  //           handleChallengeSelect(
  //             res.data.currentChallenge,
  //             res.data.distance,
  //             res.data.duration,
  //             res.data.createdAt
  //           );
  //         }
  //         if (res.status === 201) {
  //           window.localStorage.setItem(IN_CHALLENGE, false);
  //         }
  //       })
  //       .catch((error) => {
  //         throw error;
  //       });
  //   };
  //   getRequestUserChallengeDb();
  // }, [IN_CHALLENGE, STRAVA_ID, handleChallengeStart, activeChallenge]);

  // ADDS A USER TO JOIN A CHALLENGE
  // DOESN'T NEED CREATED AT AS THIS IS ADDED ON MYSQL
  // SENDS THE CHALLENGE NAME, DISTANCE AND DURATION TO THE DB

  // function setUserChallengeDb(
  //   selectedChallenge,
  //   challengeDistance,
  //   challengeDuration
  // ) {
  //   console.log(
  //     `postUserChall | You've joined the ${selectedChallenge} challenge!`
  //   );
  //   window.localStorage.setItem(IN_CHALLENGE, true);
  //   window.localStorage.setItem(CHALLENGE_SELECTED, selectedChallenge);

  //   return axios({
  //     method: "post",
  //     url: USER_CHALLENGE_DB_LINK,
  //     data: {
  //       stravaId: STRAVA_ID,
  //       username: USER_NAME,
  //       currentChallenge: selectedChallenge,
  //       distance: challengeDistance,
  //       duration: challengeDuration,
  //     },
  //   })
  //     .then((res) => console.log(res))
  //     .catch((error) => {
  //       throw error;
  //     });
  // }

  return (
    <div>
      <Navbar />

      {activeChallenge ? (
        <UserInChallenge
          selectedChallenge={selectedChallenge}
          setSelectedChallenge={setSelectedChallenge}
          stravaId={stravaId}
          activeChallenge={activeChallenge}
          setActiveChallenge={setActiveChallenge}
        />
      ) : (
        <UserIsNotInChallenge
          isOn={isOn}
          toggleIsOn={toggleIsOn}
          challengeData={challengeData}
          ConvertKmToM={ConvertKmToM}
          setUserChallengeDb={setUserChallengeDb}
          handleChallengeStart={handleChallengeStart}
          handleChallengeSelect={handleChallengeSelect}
          selectedChallenge={selectedChallenge}
          setSelectedChallenge={setSelectedChallenge}
          challengeDistance={challengeDistance}
          challengeDuration={challengeDuration}
          setChallengeDistance={setChallengeDistance}
          setChallengeDuration={setChallengeDuration}
          activeChallenge={activeChallenge}
          setActiveChallenge={setActiveChallenge}
        />
      )}
    </div>
  );
};

export default SelectAChallenge;
