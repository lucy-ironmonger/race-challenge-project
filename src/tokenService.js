import axios from "axios";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
const AUTH_GRANT_TYPE = "authorization_code";
const AUTH_LINK = process.env.REACT_APP_AUTH_LINK;

const EXPIRES_AT_KEY = "expires_at";
const ACCESS_TOKEN_KEY = "access_token";
const REFRESH_TOKEN_KEY = "refresh_token";
const STRAVA_ID = "stravaId";
const USERNAME = "username";
const FIRST_NAME = "firstName";

//
export function getAccessToken() {
  if (!isAccessTokenInLocal()) {
    return null;
  }

  const tokenExpiryEpoch = localStorage.getItem(EXPIRES_AT_KEY); //getting the value stored in this key

  // newDate gives us a new date object, the now gives us the unix time
  if (tokenExpiryEpoch <= Date.now()) {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);
    if (!refreshToken) {
      throw new Error("Panic!");
    }
    refreshAccessToken(refreshToken);
  }
  const accessTokenFromLocal = localStorage.getItem(ACCESS_TOKEN_KEY);
  return accessTokenFromLocal;
}
//

//
function isAccessTokenInLocal() {
  return localStorage.getItem(ACCESS_TOKEN_KEY) != null;
}
//

//
async function refreshAccessToken(refreshToken) {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  const res = await axios.post(
    AUTH_LINK,
    {},
    {
      headers: headers,
      params: {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        refresh_token: refreshToken,
        grant_type: "refresh_token",
      },
    }
  );

  // console.log("res from refresh request", res);
  window.localStorage.setItem("expires_at", res.data.expires_at);
  window.localStorage.setItem("access_token", res.data.access_token);
  window.localStorage.setItem("refresh_token", res.data.refresh_token);
}
//

//
export async function setTokensFromStrava(authCode) {
  const res = await axios.post(
    `https://www.strava.com/oauth/token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${authCode}&grant_type=${AUTH_GRANT_TYPE}`,
    {}
  );

  if (res.data.expires_at && res.data.access_token && res.data.refresh_token) {
    window.localStorage.setItem(EXPIRES_AT_KEY, res.data.expires_at);
    window.localStorage.setItem(ACCESS_TOKEN_KEY, res.data.access_token);
    window.localStorage.setItem(REFRESH_TOKEN_KEY, res.data.refresh_token);
    window.localStorage.setItem(STRAVA_ID, res.data.athlete.id);
    window.localStorage.setItem(USERNAME, res.data.athlete.username);
    window.localStorage.setItem(FIRST_NAME, res.data.athlete.firstname);
  } else {
    throw new Error("Could not log into Strava!");
  }
}
