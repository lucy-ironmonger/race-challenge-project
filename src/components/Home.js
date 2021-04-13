import React, { useEffect } from "react";
import Navbar from "./NavBar";
import axios from "axios";
import Challengebutton from "./Challengebutton";

const USER_DB_LINK = "http://localhost:4001/users";
const USER_CHALLENGE_DB_LINK = "http://localhost:4001/userchallenge";
let USER_NAME = window.localStorage.username;
let STRAVA_ID = window.localStorage.stravaId;

// 201 = user not in db
// 200 = user already there

/////
function getRequestUserDb() {
  axios
    .get(`${USER_DB_LINK}/${STRAVA_ID}`)
    .then((res) => {
      if (res.status === 200) {
        console.log("No need to send your info, you're already in the DB", res);
      }
      if (res.status === 201) {
        console.log("Ooh hello you're new here. We're adding you to our DB.");
        postRequestUserDb();
      }
    })
    .catch((error) => {
      throw error;
    });
}
getRequestUserDb();

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

/////

// 201 = user not in a challenge
// 200 = user is in one

const Home = () => {
  useEffect(() => {
    function getRequestUserChallengeDb() {
      axios
        .get(`${USER_CHALLENGE_DB_LINK}/${STRAVA_ID}`)
        .then((res) => {
          if (res.status === 200) {
            console.log("You're in a challenge", res);
          }
          if (res.status === 201) {
            console.log("Would you like to be in one?");
            // postRequestUserDb();
          }
        })
        .catch((error) => {
          throw error;
        });
    }
    getRequestUserChallengeDb();
  }, []);

  return (
    <>
      <Navbar />
      <div className="homepage_container">
        <h2>Hi {window.localStorage.firstName}</h2>
      </div>
      <Challengebutton />
    </>
  );
};

export default Home;
