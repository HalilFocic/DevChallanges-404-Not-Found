import "./App.css";
import Logo from "./logo.png";
import StaysList from "./StaysList";
import stays from "./stays.json";
import React, { useState } from "react";
function App() {
  const [stayList, setStayList] = useState(stays);
  const [stayNumber, setStayNumber] = useState(stays.length);
  return (
    <div className="App">
      <div className="wrapper">
        <div className="nav-bar">
          <img src={Logo} className="wind-logo" alt="wind logo" />

          <div className="search-bar">
            <div className="search-item right-border"> Add Location</div>
            <div className="search-item right-border"> Guests</div>
            <div className="search-item">
              {" "}
              <i className="material-icons search-icon">search</i>
            </div>
          </div>
        </div>
        <div className="title-bar">
          <div className="wind-title">Stays in Finland</div>
          <div className="number-of-stays">{stayNumber} stays</div>
        </div>
        <StaysList stays={stays} />
      </div>
      <footer className="my-footer">
        Created by <strong>Halil Focic</strong> - devChallenges.io
      </footer>
    </div>
  );
}

export default App;
