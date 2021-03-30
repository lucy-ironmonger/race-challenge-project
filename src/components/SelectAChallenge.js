import React from "react";
import "../styles/SelectAChallenge.scss";
import Navbar from "./NavBar";

const SelectAChallenge = ({ savedChallenge, setSavedChallenge }) => {
  return (
    <div>
      <Navbar />
      <h1 className="header">Select a challenge below</h1>
      <div className="john-o-groats">
        <h2>Land's end to John o' Groats</h2>
        <p>Distance: 603 miles</p>
        <p>Time to Complete: 120 days</p>
        <button className="john-o-groats-button">Start Challenge</button>
      </div>
      <div className="channel-tunnel">
        <h2>The Channel Tunnel</h2>
        <p>Distance: 247 miles</p>
        <p>Time to Complete: 50 days</p>
        <button className="channel-tunnel-button">Start Challenge</button>
      </div>
      <div className="m1">
        <h2>The M1</h2>
        <p>Distance: 193 miles</p>
        <p>Time to Complete: 40 days</p>
        <button className="m1-button">Start Challenge</button>
      </div>
      <div className="grand-canyon">
        <h2>The Grand Canyon</h2>
        <p>Distance: 277 miles</p>
        <p>Time to Complete: 55 days</p>
        <button className="grand-canyon-button">Start Challenge</button>
      </div>
      <div className="hadrians-wall">
        <h2>Hadrian's Wall</h2>
        <p>Distance: 73 miles</p>
        <p>Time to Complete: 15 days</p>
        <button className="hadrians-wall-button">Start Challenge</button>
      </div>
    </div>
  );
};

export default SelectAChallenge;
