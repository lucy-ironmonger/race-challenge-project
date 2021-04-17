import React, { useEffect, useState } from "react";
import Navbar from "./NavBar";
import axios from "axios";
import ChallengeButton from "./Buttons/ChallengeButton";

const USER_DB_LINK = "http://localhost:4001/users";
const USER_CHALLENGE_DB_LINK = "http://localhost:4001/userchallenge";
let USER_NAME = window.localStorage.username;
let STRAVA_ID = window.localStorage.stravaId;
let IN_CHALLENGE = "inChallenge";
const CHALLENGE_SELECTED = "challengeSelected";

// 201 = user not in db
// 200 = user already there

// 201 = user not in a challenge
// 200 = user is in one

const Home = ({
  handleChallengeStart,
  selectedChallenge,
  setSelectedChallenge,
  inChallenge,
  setInChallenge,
  handleChallengeData,
  challengeCreatedAt,
  unixCreatedAt,
  challengeDistance,
}) => {
  // CHECK IF USER IS IN A CHALLENGE AND SET STATE

  useEffect(() => {
    const getRequestUserChallengeDb = async () => {
      await axios
        .get(`${USER_CHALLENGE_DB_LINK}/${STRAVA_ID}`)
        .then((res) => {
          if (res.status === 200) {
            console.log(
              "GET REQ HOME You're already in a challenge.",
              res.data
            );
            handleChallengeStart(res.data.currentChallenge);
            setSelectedChallenge(res.data.currentChallenge);
            handleChallengeData(res.data.createdAt, res.data.currentDistance);
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

  // const getRequestUserChallengeDb = async () => {
  //   if (STRAVA_ID) {
  //     await axios
  //       .get(`${USER_CHALLENGE_DB_LINK}/${STRAVA_ID}`)
  //       .then((res) => {
  //         if (res.status === 200) {
  //           console.log(
  //             "GET REQUEST | USERCHALLENGE | HOME : Yes keen bean! You're in a challenge."
  //           );
  //           console.log(res.data);
  //           let yourCurrentChallenge = res.data.currentChallenge;
  //           handleChallengeStart(yourCurrentChallenge);
  //           setInChallenge(true);
  //           window.localStorage.setItem(IN_CHALLENGE, true);
  //         }
  //         if (res.status === 201) {
  //           console.log(
  //             "GET REQUEST | USERCHALLENGE | HOME : You ain't in a challenge mate. Join one!"
  //           );
  //           setInChallenge(false);
  //           window.localStorage.setItem(IN_CHALLENGE, false);
  //         }
  //       })
  //       .catch((error) => {
  //         throw error;
  //       });
  //   }
  // };

  ///// IF INVOKED WILL ADD USER TO USER DB
  // NOT NEEDED ON LOAD

  // function postRequestUserDb() {
  //   console.log("Added ya.");
  //   return axios({
  //     method: "post",
  //     url: USER_DB_LINK,
  //     data: {
  //       username: USER_NAME,
  //       stravaId: STRAVA_ID,
  //     },
  //   })
  //     .then((res) => console.log(res))
  //     .catch((error) => {
  //       throw error;
  //     });
  // }

  ///// CHECKS IF USER IS IN THE USER DB, IF NOT THEN ADDS THEM
  // NOT NEEDED ON LOAD

  // function getRequestUserDb() {
  //   axios
  //     .get(`${USER_DB_LINK}/${STRAVA_ID}`)
  //     .then((res) => {
  //       if (res.status === 200) {
  //         console.log("You're in our User database.", res);
  //       }
  //       if (res.status === 201) {
  //         console.log(
  //           "Ooh hello you're new here. We're adding you to our User database."
  //         );
  //         postRequestUserDb();
  //       }
  //     })
  //     .catch((error) => {
  //       throw error;
  //     });
  // }
  // getRequestUserDb();

  /////

  return (
    <>
      <Navbar />
      <div className="page_container">
        <h2>Hi {window.localStorage.firstName}</h2>
        {inChallenge ? (
          <>
            <h3>You're in the {selectedChallenge} Challenge</h3>
            <h1>Challenge Info</h1>
            <h3>Challenge started at {challengeCreatedAt}</h3>
            <h3>Challege total distance {challengeDistance}</h3>
            <h1>Your Challenge Info</h1>
            <h3>!! Distance run so far !!</h3>
            <h3>Distance remaining</h3>
            <h3>Time elapsed in challenge</h3>
            <h3>Time left in challenge</h3>
          </>
        ) : (
          <ChallengeButton>
            <ChallengeButton />
          </ChallengeButton>
        )}
      </div>
    </>
  );
};

export default Home;

// New variable which is challengeDurationUnix which is the no of days of challenge x 86400
// New variable challengeEndUnix which is challengeStartUnix + challengeDurationUnix
// You now have the variables for the filter
// We already have the GET request from the activities
// We now have the runs that fit the criteria for in the timeframe
// Reduce will add the activity.distance together and give 1 number
