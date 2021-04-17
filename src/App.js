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
  const [selectedChallenge, setSelectedChallenge] = useState("");
  const [isOn, toggleIsOn] = UseToggle();
  const [challengeCreatedAt, setChallengeCreatedAt] = useState("");
  const [challengeDistance, setChallengeDistance] = useState("");

  const CHALLENGE_SELECTED = "challengeSelected";
  let IN_CHALLENGE = "inChallenge";

  const handleChallengeStart = (challenge) => {
    window.localStorage.setItem(CHALLENGE_SELECTED, challenge);
    window.localStorage.setItem(IN_CHALLENGE, true);
    setSelectedChallenge(challenge);
    setInChallenge(true);
  };

  const handleChallengeSelect = (challenge) => {
    window.localStorage.setItem(CHALLENGE_SELECTED, challenge);
    setSelectedChallenge(challenge);
  };

  const handleChallengeData = (createdAt, challengeDistance) => {
    setChallengeCreatedAt(createdAt);
    setChallengeDistance(challengeDistance);
  };

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
            />
          )}
        />
      </Router>
    </>
  );
};

export default App;
