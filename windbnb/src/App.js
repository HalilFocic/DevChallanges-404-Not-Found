import "./App.css";
import Logo from "./logo.png";
import StaysList from "./StaysList";
import stays from "./stays.json";
import React, { useState } from "react";
function App() {
  const [stayList, setStayList] = useState(stays);
  const [stayNumber, setStayNumber] = useState(stays.length);
  const [modalOpen, setModalOpen] = useState(false);
  const [location, setLocation] = useState("");
  const [guests, setGuests] = useState(0);
  const openModal = () => {
    setModalOpen(true);
  };
  console.log(stays);
  const filterStays = () => {
    setModalOpen(false);
  };
  return (
    <div className="App">
      <div className="wrapper">
        <div className="nav-bar">
          <img src={Logo} className="wind-logo" alt="wind logo" />

          <div className="search-bar" onClick={() => openModal()}>
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
      <div className={`modal ${modalOpen ? "show" : ""}`}>
        <div className="modal-white">
          <div className="modal-bar">
            <div className="modal-item modal-border">
              <div className="modal-title">LOCATION</div>
              <div className="modal-location">
                {location ? location : "Add Location"}
              </div>
            </div>
            <div className="modal-item modal-border">
              <div className="modal-title">GUESTS</div>
              <div className="modal-guests">
                {guests > 0 ? guests : "Add Guests"}
              </div>
            </div>
            <div className="modal-item modal-search">
              <button className="btn-search" onClick={() => filterStays()}>
                <i className="material-icons btn-search-icon">search</i> Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
