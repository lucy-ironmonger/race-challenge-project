import React, { useEffect, useState } from "react";
import Navbar from "./NavBar";
import axios from "axios";
import ChallengeButton from "./Buttons/ChallengeButton";

const USER_DB_LINK = "http://localhost:4001/users";
const USER_CHALLENGE_DB_LINK = "http://localhost:4001/userchallenge";
let USER_NAME = window.localStorage.username;
let STRAVA_ID = window.localStorage.stravaId;

// 201 = user not in db
// 200 = user already there

// 201 = user not in a challenge
// 200 = user is in one

const Home = ({
  handleChallengeSelect,
  selectedChallenge,
  inChallege,
  setInChallenge,
}) => {
  // // CHECK IF USER IS IN A CHALLENGE AND SET STATE
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
  //       }
  //       if (res.status === 201) {
  //         console.log("You ain't in a challenge mate. Join one!");
  //         setInChallenge(false);
  //       }
  //     })
  //     .catch((error) => {
  //       throw error;
  //     });
  // };

  // getRequestUserChallengeDb();

  ///// IF INVOKED WILL ADD USER TO USER DB

  function postRequestUserDb() {
    console.log("Added ya.");
    return axios({
      method: "post",
      url: USER_DB_LINK,
      data: {
        username: USER_NAME,
        stravaId: STRAVA_ID,
      },
    })
      .then((res) => console.log(res))
      .catch((error) => {
        throw error;
      });
  }

  ///// CHECKS IF USER IS IN THE USER DB, IF NOT THEN ADDS THEM

  function getRequestUserDb() {
    axios
      .get(`${USER_DB_LINK}/${STRAVA_ID}`)
      .then((res) => {
        if (res.status === 200) {
          console.log("You're in our User database.", res);
        }
        if (res.status === 201) {
          console.log(
            "Ooh hello you're new here. We're adding you to our User database."
          );
          postRequestUserDb();
        }
      })
      .catch((error) => {
        throw error;
      });
  }
  getRequestUserDb();

  /////

  return (
    <>
      <Navbar />
      <div className="homepage_container">
        <h2>Hi {window.localStorage.firstName}</h2>
        <h3>You're in the {selectedChallenge} Challenge</h3>
      </div>
      <ChallengeButton />
    </>
  );
};

export default Home;
