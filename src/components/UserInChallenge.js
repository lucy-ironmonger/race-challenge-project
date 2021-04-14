import React from "react";
import { Link } from "react-router-dom";

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
          <button
            className="selectAChallenge-endChallenge_button"
            // onClick= RUN A DELETE REQUEST TO THE USERCHALLENGE DB
          >
            End challenge
          </button>
        </h1>
      )}
    </>
  );
};

export default UserInChallenge;
