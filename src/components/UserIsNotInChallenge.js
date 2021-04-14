import React from "react";

const UserIsNotInChallenge = ({ savedChallenge }) => {
  return (
    <>
      {!savedChallenge && (
        <>
          <h1 className="start-challenge_header">Select a challenge below</h1>
          <h1>
            <button
              className="selectAChallenge-startChallenge_button"
              // onClick={toggleIsOn}
            >
              Start challenge now
            </button>
          </h1>
        </>
      )}
    </>
  );
};

export default UserIsNotInChallenge;
