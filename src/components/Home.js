import React from "react";
import Challengebutton from "./Challengebutton";
import Navbar from "./NavBar";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="homepage_container">
        <h1>Race Challenge Homepage</h1>
      </div>

      <Challengebutton />
    </>
  );
};

export default Home;
