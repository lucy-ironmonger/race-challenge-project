import React from "react";

const ActivitySummary = ({
  activity,
  convertKmToM,
  isOn,
  averagePaceMph,
  averagePaceKm,
}) => {
  const { name, distance, total_elevation_gain, moving_time, key } = activity;
  return (
    <div className="activities-list_div">
      <h2>{`${name}`}</h2>
      <div>{key}</div>
      {isOn && <h3>{`Distance: ${(distance / 1000).toFixed(2)} km`}</h3>}
      {!isOn && <h3>{`Distance: ${convertKmToM(distance)} miles`}</h3>}
      <h3>{` Total Elevation: ${total_elevation_gain} metres`}</h3>
      {isOn && (
        <h3>{`Average Pace: ${averagePaceKm(distance, moving_time)} km/h`}</h3>
      )}
      {!isOn && (
        <h3>{` Average Pace: ${averagePaceMph(distance, moving_time)} mph`}</h3>
      )}
    </div>
  );
};

export default ActivitySummary;
