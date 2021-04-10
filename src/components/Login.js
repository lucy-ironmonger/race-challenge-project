import React from "react";
import "../styles/Login.scss";
import ReactTypingEffect from "react-typing-effect";

const Login = () => {
  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  const APP_URL = process.env.REACT_APP_APP_URL;
  const url = `http://www.strava.com/oauth/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${APP_URL}/exchange_token&approval_prompt=force&scope=activity:read`;

  function openUrl() {
    window.location = url;
  }

  return (
    <>
      <div className="main loginpage">
        <div className="race-challenge">
          <div className="typewriter">
            <ReactTypingEffect
              startDelay={120}
              text={["Welcome To Race Challenge!"]}
              typeSpeed={170}
            />
          </div>
        </div>
        <div className="login_button_container">
          <button className="login_button" onClick={openUrl}>
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
