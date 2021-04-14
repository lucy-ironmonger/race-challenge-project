import React from "react";

const UserInChallenge = ({ savedChallenge }) => {
  return (
    <>
      {savedChallenge && (
        <h1 className="start-challenge_header">
          You're in the
          <h2>{savedChallenge}</h2>
          <button
            className="selectAChallenge-endChallenge_button"
            // onClick={toggleIsOn}
          >
            End challenge
          </button>
        </h1>
      )}
    </>
  );
};

export default UserInChallenge;
