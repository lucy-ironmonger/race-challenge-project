import React, { useEffect, useState } from "react";
import Navbar from "./NavBar";
import axios from "axios";
import Challengebutton from "./Challengebutton";

const USER_DB_LINK = "http://localhost:4001/users";
const USER_CHALLENGE_DB_LINK = "http://localhost:4001/userchallenge";
let USER_NAME = window.localStorage.username;
let STRAVA_ID = window.localStorage.stravaId;

// 201 = user not in db
// 200 = user already there

// 201 = user not in a challenge
// 200 = user is in one

const Home = ({ handleChallengeSave, savedChallenge }) => {
  // const [savedChallenge, setSavedChallenge] = useState("");

  const getRequestUserChallengeDb = async () => {
    await axios
      .get(`${USER_CHALLENGE_DB_LINK}/${STRAVA_ID}`)
      .then((res) => {
        if (res.status === 200) {
          console.log("Yes keen bean! You're in a challenge.");
          console.log(res.data.currentChallenge);
          let yourCurrentChallenge = res.data.currentChallenge;
          handleChallengeSave(yourCurrentChallenge);
        }
        if (res.status === 201) {
          console.log(
            "You ain't in a challenge mate. Head to the challenges page to join one!"
          );
        }
      })
      .catch((error) => {
        throw error;
      });
  };

  getRequestUserChallengeDb();

  /////

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
        <h3>You're in the {savedChallenge} Challenge</h3>
      </div>
      <Challengebutton />
    </>
  );
};

export default Home;
