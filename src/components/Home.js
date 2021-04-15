import React, { useEffect, useState } from "react";
import Navbar from "./NavBar";
import axios from "axios";
import Challengebutton from "./Challengebutton";
import Backgrcolorchange from "./Backgrcolorchange";

const USER_LINK = "http://localhost:4001/users";
let USER_NAME = window.localStorage.username;
let STRAVA_ID = window.localStorage.stravaId;

// 201 = user not in db
// 200 = user already there

function getRequest() {
  axios
    .get(`${USER_LINK}/${STRAVA_ID}`)
    .then((res) => {
      if (res.status === 200) {
        console.log("No need to send your info, you're already in the DB", res);
      }
      if (res.status === 201) {
        console.log("Ooh hello you're new here. We're adding you to our DB.");
        postRequest();
      }
    })
    .catch((error) => {
      throw error;
    });
}
getRequest();

function postRequest() {
  console.log("Added ya.");
  return axios({
    method: "post",
    url: USER_LINK,
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

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="homepage_container">
        <h2>Hi {window.localStorage.firstName}</h2>
      </div>
      <Challengebutton />

      <Backgrcolorchange />
    </>
  );
};

export default Home;
