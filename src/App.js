import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import ExchangeToken from "./components/ExchangeToken";
import ActivitiesList from "./components/ActivitiesList";
import { getAccessToken } from "./tokenService";
import SelectAChallenge from "./components/SelectAChallenge";
import challengeData from "./data/challengedata.js";
import UseToggle from "./controllers/UseToggle";

const challengesData = challengeData;

// APP
const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [savedChallenge, setSavedChallenge] = useState("");
  const [isOn, toggleIsOn] = UseToggle();

  const handleChallengeSave = (challenge) => {
    setSavedChallenge(challenge);
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
            savedChallenge={savedChallenge}
            setSavedChallenge={setSavedChallenge}
            handleChallengeSave={handleChallengeSave}
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
              challengesData={challengesData}
              isOn={isOn}
              toggleIsOn={toggleIsOn}
              // savedChallenge={savedChallenge}
              // setSavedChallenge={setSavedChallenge}
              handleChallengeSave={handleChallengeSave}
            />
          )}
        />
      </Router>
    </>
  );
};

export default App;
