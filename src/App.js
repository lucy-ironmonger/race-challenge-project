import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import ExchangeToken from "./components/ExchangeToken";
import ActivitiesList from "./components/ActivitiesList";
import { getAccessToken } from "./tokenService";
import SelectAChallenge from "./components/SelectAChallenge";
import UseToggle from "./controllers/UseToggle";
import challengeRawData from "./data/challengeRawData.js";

// APP COMPONENT
const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [challengeData, setChallengeData] = useState(challengeRawData);
  const [inChallenge, setInChallenge] = useState(false);
  const [isOn, toggleIsOn] = UseToggle();
  const [selectedChallenge, setSelectedChallenge] = useState("");
  const [unixCreatedAt, setUnixCreatedAt] = useState("");
  const [challengeCreatedAt, setChallengeCreatedAt] = useState("");
  const [challengeDistance, setChallengeDistance] = useState("");
  const [challengeDuration, setChallengeDuration] = useState(0);

  const CHALLENGE_SELECTED = "challengeSelected";
  let IN_CHALLENGE = "inChallenge";

  // CONVERTS DATE TO UNIX TIMESTAMP
  const dateCreatedInUnixTime = (createdAt) => {
    return new Date(createdAt).getTime();
  };

  // WHEN YOU HIT START CHALLENGE, IT SAVES STATE AND LOCALSTORAGE TO CONFIRM (INCASE OF REFRESH)

  const handleChallengeStart = (challenge) => {
    window.localStorage.setItem(CHALLENGE_SELECTED, challenge);
    window.localStorage.setItem(IN_CHALLENGE, true);
    setSelectedChallenge(challenge);
    setInChallenge(true);
  };

  // WHEN YOU SELECT A CHALLENGE, IT SAVES STATE
  const handleChallengeSelect = (challenge) => {
    window.localStorage.setItem(CHALLENGE_SELECTED, challenge);
    setSelectedChallenge(challenge);
    setChallengeDistance(challengeDistance);
    setChallengeDuration(challengeDuration);
    console.log(`You've selected the ${challenge} challenge`);
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

  return (
    <>
      <Router>
        <Route path="/" exact>
          <Home
            selectedChallenge={selectedChallenge}
            setSelectedChallenge={setSelectedChallenge}
            handleChallengeStart={handleChallengeStart}
            inChallenge={inChallenge}
            setInChallenge={setInChallenge}
            handleChallengeData={handleChallengeData}
            challengeCreatedAt={challengeCreatedAt}
            unixCreatedAt={unixCreatedAt}
            challengeDistance={challengeDistance}
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
              inChallenge={inChallenge}
              setInChallenge={setInChallenge}
              challengeDuration={challengeDuration}
              setChallengeDuration={setChallengeDuration}
              challengeDistance={challengeDistance}
              setChallengeDistance={setChallengeDistance}
            />
          )}
        />
      </Router>
    </>
  );
};

export default App;
