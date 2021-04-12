import React, { useEffect } from "react";
import Navbar from "./NavBar";
// import axios from "axios";
import Challengebutton from "./Challengebutton";

// useEffect(() => {
//   if (wwindow.localStorage.stravaId) {
//     axios.post("http://localhost:4001/userchallenge").then((results) => {
//       setSavedProperties(results.data);
//     });
//   }
// }, [userID]);

// const handleLogout = () => {
//   window.FB.logout(() => {});
//   setUserID("");
// };

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="homepage_container">
        <h2>Hi, {window.localStorage.firstName}</h2>
        <button>Add athlete to database</button>
      </div>

      <Challengebutton />
    </>
  );
};

export default Home;
