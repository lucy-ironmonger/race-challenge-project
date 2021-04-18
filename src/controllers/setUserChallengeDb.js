import axios from "axios";
const USER_CHALLENGE_DB_LINK = "http://localhost:4001/userchallenge";
let USER_NAME = window.localStorage.username;
let STRAVA_ID = window.localStorage.stravaId;
const CHALLENGE_SELECTED = "challengeSelected";
let IN_CHALLENGE = "inChallenge";

function setUserChallengeDb(
  selectedChallenge,
  challengeDistance,
  challengeDuration
) {
  console.log(
    `postUserChall | You've joined the ${selectedChallenge} challenge!`
  );
  window.localStorage.setItem(IN_CHALLENGE, true);
  window.localStorage.setItem(CHALLENGE_SELECTED, selectedChallenge);

  return axios({
    method: "post",
    url: USER_CHALLENGE_DB_LINK,
    data: {
      stravaId: STRAVA_ID,
      username: USER_NAME,
      currentChallenge: selectedChallenge,
      distance: challengeDistance,
      duration: challengeDuration,
    },
  })
    .then((res) => console.log(res))
    .catch((error) => {
      throw error;
    });
}

export default setUserChallengeDb;
