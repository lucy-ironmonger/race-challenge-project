import React, { useEffect, useState, useCallback } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import ExchangeToken from "./components/ExchangeToken";
import ActivitiesList from "./components/ActivitiesList";
import { getAccessToken } from "./tokenService";
import SelectAChallenge from "./components/SelectAChallenge";
import UseToggle from "./controllers/UseToggle";
import challengeRawData from "./data/challengeRawData.js";
import axios from "axios";
import setUserChallengeDb from "./controllers/setUserChallengeDb";

// APP COMPONENT
const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [challengeData, setChallengeData] = useState(challengeRawData);
  const [isOn, toggleIsOn] = UseToggle();
  const [selectedChallenge, setSelectedChallenge] = useState("");
  const [unixCreatedAt, setUnixCreatedAt] = useState("");
  const [challengeCreatedAt, setChallengeCreatedAt] = useState("");
  const [challengeDistance, setChallengeDistance] = useState("");
  const [challengeDuration, setChallengeDuration] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState(null);

  const CHALLENGE_SELECTED = "challengeSelected";
  let IN_CHALLENGE = "inChallenge";
  let STRAVA_ID = window.localStorage.stravaId;
  const USER_CHALLENGE_DB_LINK = "http://localhost:4001/userchallenge";
  let USER_NAME = window.localStorage.username;

  const dateCreatedInUnixTime = (createdAt) => {
    return new Date(createdAt).getTime();
  };

  // WHEN YOU HIT START CHALLENGE, IT SAVES STATE AND LOCALSTORAGE TO CONFIRM (INCASE OF REFRESH)

  // ORIGINAL VERSION
  const handleChallengeStart = useCallback(() => {
    // Is there anything SELECTED? If no don't do anything.
    // If yes, set to active state
    // Then write to DB
    setActiveChallenge({
      name: selectedChallenge,
      distance: challengeDistance,
      duration: challengeDuration,
      createdAt: challengeCreatedAt,
    });

    console.log("hitting handleChallengeStart");

    setUserChallengeDb(selectedChallenge, challengeDistance, challengeDuration);
    window.localStorage.setItem(CHALLENGE_SELECTED, selectedChallenge);
    window.localStorage.setItem(IN_CHALLENGE, true);
  }, [
    IN_CHALLENGE,
    challengeCreatedAt,
    challengeDistance,
    challengeDuration,
    selectedChallenge,
  ]);
  // END OF ORIGINAL VERSION

  // WHEN YOU SELECT A CHALLENGE, IT SAVES STATE
  // HAPPY WITH THIS
  const handleChallengeSelect = (
    challengeName,
    challengeDistance,
    challengeDuration,
    createdAt
  ) => {
    window.localStorage.setItem(CHALLENGE_SELECTED, challengeName);
    setSelectedChallenge(challengeName);
    setChallengeDistance(challengeDistance);
    setChallengeDuration(challengeDuration);
    setChallengeCreatedAt(createdAt);
    console.log(
      `Handle Challenge Select | You've selected the ${challengeName} challenge, which is ${challengeDistance} long and ${challengeDuration} number of days.`
    );
  };

  // CONFIRMS ALL THE MAIN INFO WHEN A CHALLENGE IS STARTED
  // IS DISTANCE AND DURATION NEEDED?
  const handleChallengeData = (
    createdAt,
    challengeDistance,
    challengeDuration
  ) => {
    setUnixCreatedAt(dateCreatedInUnixTime(createdAt));
    setChallengeCreatedAt(createdAt);
    setChallengeDistance(challengeDistance);
    setChallengeDuration(challengeDuration);
  };

  // ASSISTS LOGIN OAUTH
  useEffect(() => {
    const accessTokenCheck = async () => {
      let accessToken;
      try {
        accessToken = getAccessToken();

        if (accessToken) {
          setLoggedIn(true);
        }
      } catch (error) {
        throw error;
      }
    };
    accessTokenCheck();
  }, []);

  useEffect(() => {
    const getRequestUserChallengeDb = async () => {
      console.log("fired!");
      await axios
        .get(`${USER_CHALLENGE_DB_LINK}/${STRAVA_ID}`)
        .then((res) => {
          if (res.status === 200) {
            console.log(
              `You're already in the ${activeChallenge} challenge.`,
              res.data
            );
            handleChallengeSelect(
              res.data.currentChallenge,
              res.data.distance,
              res.data.duration,
              res.data.createdAt
            );
          }
          if (res.status === 201) {
            window.localStorage.setItem(IN_CHALLENGE, false);
          }
        })
        .catch((error) => {
          throw error;
        });
    };
    getRequestUserChallengeDb();
  }, [IN_CHALLENGE, STRAVA_ID, handleChallengeStart, activeChallenge]);

  return (
    <>
      <Router>
        <Route path="/" exact>
          <Home
            selectedChallenge={selectedChallenge}
            setSelectedChallenge={setSelectedChallenge}
            handleChallengeStart={handleChallengeStart}
            handleChallengeData={handleChallengeData}
            challengeCreatedAt={challengeCreatedAt}
            unixCreatedAt={unixCreatedAt}
            challengeDistance={challengeDistance}
            challengeDuration={challengeDuration}
            dateCreatedInUnixTime={dateCreatedInUnixTime}
            activeChallenge={activeChallenge}
          />
        </Route>
        <Route path="/login" component={Login} />
        <Route path="/exchange_token">
          <ExchangeToken setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
        </Route>
        <Route path="/activities">
          <ActivitiesList
            className="activities-list"
            loggedIn={loggedIn}
            isOn={isOn}
            toggleIsOn={toggleIsOn}
          />
        </Route>
        <Route
          exact
          path="/challenges"
          render={() => (
            <SelectAChallenge
              isOn={isOn}
              toggleIsOn={toggleIsOn}
              selectedChallenge={selectedChallenge}
              setSelectedChallenge={setSelectedChallenge}
              handleChallengeStart={handleChallengeStart}
              handleChallengeSelect={handleChallengeSelect}
              challengeData={challengeData}
              challengeDuration={challengeDuration}
              setChallengeDuration={setChallengeDuration}
              challengeDistance={challengeDistance}
              setChallengeDistance={setChallengeDistance}
              activeChallenge={activeChallenge}
              setActiveChallenge={setActiveChallenge}
              setUserChallengeDb={setUserChallengeDb}
            />
          )}
        />
      </Router>
    </>
  );
};

export default App;
