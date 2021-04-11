import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import ActivitySummary from "./ActivitySummary";
import averagePaceMph from "../controllers/averagePaceMph";
import averagePaceKm from "../controllers/averagePaceKm";
import ConvertKmToM from "../controllers/ConvertKmToM";
import "../styles/ActivitiesList.scss";
import { getAccessToken } from "../tokenService";
import Navbar from "./NavBar";

const ActivitiesList = ({ loggedIn, isOn, toggleIsOn }) => {
  const [activities, setActivities] = useState([]);

  const fetchActivities = async (accessToken) => {
    const activities_link = `https://www.strava.com/api/v3/athlete/activities?access_token=${accessToken}`;
    const response = await axios.get(activities_link);
    return response.data;
  };

  useEffect(() => {
    // DEFININING THE FUNCTION
    const loadActivities = async () => {
      const accessToken = getAccessToken();
      if (!accessToken) {
        return;
      }
      const runData = await fetchActivities(accessToken);
      if (!runData) {
        console.log("Belly is gonna get you - get running!!");
      }
      setActivities(runData);
    };
    // ACTUAL USEEFFECT - THIS IS ONLY CALLED IF YOU ARE LOGGED IN
    if (loggedIn) {
      loadActivities();
    }
  }, [loggedIn]);

  if (!loggedIn) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <Navbar />
      <div className="activities-list_button_container activity_background">
        <button
          className="activities-list_button_distance_metric"
          onClick={toggleIsOn}
        >
          {isOn ? "Set to miles" : "Set to kilometres"}
        </button>
      </div>

      {activities.map((activity) => {
        return (
          <ActivitySummary
            className="activities-list"
            activity={activity}
            convertKmToM={ConvertKmToM}
            averagePaceMph={averagePaceMph}
            averagePaceKm={averagePaceKm}
            isOn={isOn}
            key={activity.upload_id}
          />
        );
      })}
    </div>
  );
};

export default ActivitiesList;
