import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import EndChallengeButton from "./Buttons/EndChallengeButton";
import ViewStatsButton from "./Buttons/ViewStatsButton";

const UserInChallenge = ({
  selectedChallenge,
  setSelectedChallenge,
  setInChallenge,
  inChallenge,
}) => {
  const USER_CHALLENGE_DB_LINK = "http://localhost:4001/userchallenge";
  let STRAVA_ID = window.localStorage.stravaId;
  let IN_CHALLENGE = "inChallenge";
  const CHALLENGE_SELECTED = "challengeSelected";

  function endChallenge() {
    console.log(
      "FUNC endChallenge | USERINCHALLENGE | Goodbye challenge, we hardly knew you."
    );
    setInChallenge(false);
    setSelectedChallenge("");
    return axios.delete(`${USER_CHALLENGE_DB_LINK}/${STRAVA_ID}`);
  }

  function handleEndChallenge() {
    endChallenge();
    window.localStorage.setItem(IN_CHALLENGE, false);
    window.localStorage.setItem(CHALLENGE_SELECTED, null);
  }

  return (
    <>
      <div className="page_container">
        <h2>You're in the</h2>
        <h2>{window.localStorage.challengeSelected} Challenge</h2>
        <h3 className="start-challenge_legend">What a legend. Keep going!</h3>
      </div>
      <div>
        <Link to="/" style={{ textDecoration: "none" }}>
          <ViewStatsButton className="selectAChallenge-viewStats_button" />
        </Link>
        <EndChallengeButton handleEndChallenge={handleEndChallenge} />
      </div>
    </>
  );
};

export default UserInChallenge;
