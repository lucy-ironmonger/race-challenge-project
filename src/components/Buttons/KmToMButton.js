import React from "react";

const KmToMButton = ({ toggleIsOn, isOn }) => {
  return (
    <>
      <div className="activities-list_button_container activity_background">
        <button
          className="activities-list_button_distance_metric"
          onClick={toggleIsOn}
        >
          {isOn ? "Set to miles" : "Set to kilometres"}
        </button>
      </div>
    </>
  );
};

export default KmToMButton;
