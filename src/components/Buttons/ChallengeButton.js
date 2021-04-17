import React from "react";
import "../../styles/ChallengeButton.scss";
import { Link } from "react-router-dom";

// PARENT : HOME

const ChallengeButton = () => {
  return (
    <>
      <div className="ChallengeButton">
        <Link to="/challenges">
          <img
            src="https://fitnessmedia.azureedge.net/media/4269/shutterstock_544106977-marathon20runners20192020x201080-compressed.jpg"
            alt="runner"
          />
          <div className="ChallengeButton_link">
            <div className="button">Join A Challenge</div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ChallengeButton;
