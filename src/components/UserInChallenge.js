import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const USER_CHALLENGE_DB_LINK = "http://localhost:4001/userchallenge";
let STRAVA_ID = window.localStorage.stravaId;

const UserInChallenge = ({
  selectedChallenge,
  setSelectedChallenge,
  setInChallenge,
}) => {
  function endChallenge() {
    console.log("Goodbye challenge, we hardly knew you.");
    setInChallenge(false);
    setSelectedChallenge("");
    return axios.delete(`${USER_CHALLENGE_DB_LINK}/${STRAVA_ID}`);
  }

  return (
    <>
      {selectedChallenge && (
        <h1 className="start-challenge_header">
          You're in the
          <h2>{selectedChallenge} Challenge</h2>
          <h3 className="start-challenge_legend">What a legend. Keep going!</h3>
          <Link to="/">
            <button className="selectAChallenge-viewStats_button">
              View your challenge stats
            </button>
          </Link>
          <button onClick={endChallenge}>End challenge</button>
        </h1>
      )}
    </>
  );
};

export default UserInChallenge;
