import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import ExchangeToken from "./components/ExchangeToken";
import NavBar from "./components/NavBar";
import ActivitiesList from "./components/ActivitiesList";
import { getAccessToken } from "./tokenService";

// APP
const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

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
        <NavBar className="nav-bar" />
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/exchange_token">
          <ExchangeToken setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
        </Route>
        <Route path="/activities">
          <ActivitiesList className="activities-list" loggedIn={loggedIn} />
        </Route>
      </Router>
    </>
  );
};

export default App;
