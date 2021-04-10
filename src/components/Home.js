import React, { useEffect, useState } from "react";
import Navbar from "./NavBar";
import axios from "axios";
import Challengebutton from "./Challengebutton";

const USER_LINK = "http://localhost:4001/users";
let USER_NAME = window.localStorage.username;
let STRAVA_ID = window.localStorage.stravaId;

//     .then((results) => {
//       setSavedProperties(results.data);
//     });
//   }
// }, [userID]);

const Home = () => {
  useEffect(() => {
    console.log(USER_NAME, STRAVA_ID);
    axios.post(
      USER_LINK,
      {},
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: {
          stravaId: STRAVA_ID,
          username: USER_NAME,
        },
      }
    );
  }, []);

  // const handleClick = () => {
  //   console.log("click before async");
  //   //   const res = axios.post(USER_LINK, { username: USER_NAME });
  //   // };

  //   function saveUserToDb() {
  //     console.log("click after async");
  //   }
  // };

  // async function saveUserToDb() {
  //   const res = await axios.post(
  //     USER_LINK,
  //     {},
  //     {
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: {
  //         stravaId: window.localStorage.stravaId,
  //         username: window.localStorage.username,
  //       },
  //     }
  //   );
  //   console.log("click after async");
  // }

  // useEffect(() => {
  //   if (window.localStorage.stravaId) {
  //     async function saveUserToDb() {
  //       const headers = {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       };

  //       await axios.post(
  //         USER_LINK,
  //         {},
  //         {
  //           headers: headers,
  //           body: {
  //             stravaId: window.localStorage.stravaId,
  //             username: window.localStorage.username,
  //           },
  //         }
  //       );
  //     }
  //   }
  // }, []);

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
