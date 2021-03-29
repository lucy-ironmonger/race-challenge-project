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
      <div>{`${name}`}</div>
      <div>{key}</div>
      {isOn && <div>{`Distance: ${(distance / 1000).toFixed(2)} km`}</div>}
      {!isOn && <div>{`Distance: ${convertKmToM(distance)} miles`}</div>}
      <div>{` Total Run Elevation: ${total_elevation_gain} metres`}</div>
      {isOn && (
        <div>{`Average Pace: ${averagePaceKm(
          distance,
          moving_time
        )} km/h`}</div>
      )}
      {!isOn && (
        <div>{` Average Pace: ${averagePaceMph(
          distance,
          moving_time
        )} mph`}</div>
      )}
    </div>
  );
};

export default ActivitySummary;
