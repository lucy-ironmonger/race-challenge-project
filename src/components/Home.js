import React, { useEffect, useState } from "react";
import Navbar from "./NavBar";
import axios from "axios";
import Challengebutton from "./Challengebutton";

const USER_LINK = "http://localhost:4001/users";
let USER_NAME = window.localStorage.username;
let STRAVA_ID = window.localStorage.stravaId;

function sendRequest() {
  console.log("sending request");
  return axios({
    method: "post",
    url: USER_LINK,
    data: {
      username: USER_NAME,
      stravaID: STRAVA_ID,
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
        <h2>Hi, {window.localStorage.firstName}</h2>
      </div>
      <Challengebutton />
    </>
  );
};

export default Home;
