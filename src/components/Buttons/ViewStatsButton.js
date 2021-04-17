import React from "react";
import "../../styles/ChallengeButton.scss";

const ViewStatsButton = ({ endChallenge }) => {
  return (
    <div className="start-challenges_button_container">
      <div className="start-challenges_button" onClick={endChallenge}>
        View your challenge stats 👏
      </div>
    </div>
  );
};

export default ViewStatsButton;
