import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { setTokensFromStrava } from "../tokenService";

const ExchangeToken = ({ loggedIn, setLoggedIn }) => {
  const [error, setError] = useState(false);

  async function handleLogin() {
    const query = new URLSearchParams(document.location.search);
    const authCode = query.get("code");

    if (!authCode) {
      setError(true);
      return;
    }

    try {
      await setTokensFromStrava(authCode);
      setLoggedIn(true);
    } catch (error) {
      console.error("Could not log into strava!");
      return setError(true);
    }
  }

  if (error) {

    return (
      <div>
        There was an error logging in
      </div>
    )
  }
  
  if (loggedIn) {
    return (
      <Redirect to='/' />
    )
  }

  handleLogin()
  return (
    <div>
      Loading
    </div>
  )
  
};

export default ExchangeToken;
