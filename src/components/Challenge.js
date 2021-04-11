import React from "react";
import axios from "axios";

const USER_LINK = "http://localhost:4001/userchallenge";
let USER_NAME = window.localStorage.username;
let STRAVA_ID = window.localStorage.stravaId;

// function getUserChallenge() {
//   axios
//     .get(`${USER_LINK}/${STRAVA_ID}`)
//     .then((res) => {
//       if (res.status === 200) {
//         console.log("You are already in a challenge", res);
//       }
//       if (res.status === 201) {
//         console.log("New Challenge added to the database");
//         postUserChallengeRequest();
//       }
//     })
//     .catch((error) => {
//       throw error;
//     });
// }

// getUserChallenge();

const Challenge = ({
  challengeName,
  challengeDistance,
  challengeDuration,
  onChallengeSelect,
  convertKmToM,
  isOn,
  postUserChallengeRequest,
}) => {
  return (
    <div className="start-challenges-container">
      <h1>{challengeName}</h1>
      {isOn && (
        <h3>{`Distance: ${(challengeDistance / 1000).toFixed(2)} km`}</h3>
      )}
      {!isOn && <h3>{`Distance: ${convertKmToM(challengeDistance)} miles`}</h3>}
      <h3>Time to Complete: {challengeDuration} Days</h3>

      <button
        className="start-challenges_button"
        onClick={() => onChallengeSelect(challengeName)}
      >
        Start Challenge
      </button>
      <button
        onClick={() =>
          postUserChallengeRequest(
            challengeName,
            challengeDistance,
            challengeDuration
          )
        }
      >
        Start a Challenge
      </button>
    </div>
  );
};

export default Challenge;
