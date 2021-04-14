import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const USER_CHALLENGE_DB_LINK = "http://localhost:4001/userchallenge";
let STRAVA_ID = window.localStorage.stravaId;

function EndChallenge() {
  console.log("deleted challenge");
  return axios.delete(`${USER_CHALLENGE_DB_LINK}/${STRAVA_ID}`);
}

const UserInChallenge = ({ savedChallenge }) => {
  return (
    <>
      {savedChallenge && (
        <h1 className="start-challenge_header">
          You're in the
          <h2>{savedChallenge} Challenge</h2>
          <h3 className="start-challenge_legend">What a legend. Keep going!</h3>
          <Link to="/">
            <button
              className="selectAChallenge-viewStats_button"
              // onClick={toggleIsOn}
            >
              View your challenge stats
            </button>
          </Link>
          <button onClick={EndChallenge}>End challenge</button>
        </h1>
      )}
    </>
  );
};

export default UserInChallenge;
