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
  const [locationFocus, setLocationFocus] = useState(false);
  const [guestFocus, setGuestFocus] = useState(false);
  const [adultNumber, setAdultNumber] = useState(0);
  const [childrenNumber, setChildrenNumber] = useState(0);

  const openModal = () => {
    setModalOpen(true);
  };
  const filterStays = () => {
    if (location === "") {
      return;
    }
    let locationArray = location.split(", ");
    let newStays = stays.filter(
      (s) => s.city === locationArray[0] && s.maxGuests >= guests
    );
    setStayNumber(newStays.length);
    setStayList(newStays);
    setModalOpen(false);
  };
  const openGuestModal = () => {
    setLocationFocus(false);
    setGuestFocus(true);
  };
  const openLocationModal = () => {
    setGuestFocus(false);
    setLocationFocus(true);
  };
  const increaseAdults = () => {
    let newAdult = adultNumber + 1;
    setAdultNumber(newAdult);
    let newTotal = childrenNumber + newAdult;
    setGuests(newTotal);
  };
  const decreaseAdults = () => {
    let newAdult = adultNumber - 1;
    setAdultNumber(newAdult);
    let newTotal = childrenNumber + newAdult;
    setGuests(adultNumber + childrenNumber);
  };
  const increaseChildren = () => {
    let newChildren = childrenNumber + 1;
    setChildrenNumber(newChildren);
    let newTotal = newChildren + adultNumber;
    setGuests(newTotal);
  };
  const decreaseChildren = () => {
    let newChildren = childrenNumber - 1;
    setChildrenNumber(newChildren);
    let newTotal = newChildren + adultNumber;
    setGuests(newTotal);
  };
  const changeLocation = (location) => {
    setLocation(location);
  };
  console.log(stays);
  return (
    <div className="App">
      <div className="wrapper">
        <div className="nav-bar">
          <img src={Logo} className="wind-logo" alt="wind logo" />

          <div className="search-bar" onClick={() => openModal()}>
            <div className="search-item right-border">
              {location ? location : "Add Location"}
            </div>
            <div className="search-item right-border"> Guests</div>
            <div className="search-item search-box">
              {" "}
              <i className="material-icons search-icon">search</i>
            </div>
          </div>
        </div>
        <div className="title-bar">
          <div className="wind-title">Stays in Finland</div>
          <div className="number-of-stays">{stayNumber} stays</div>
        </div>
        <StaysList stays={stayList} />
      </div>
      <footer className="my-footer">
        Created by <strong>Halil Focic</strong> - devChallenges.io
      </footer>
      <div className={`modal ${modalOpen ? "show" : ""}`}>
        <div className="modal-white">
          <div className="modal-bar">
            <div
              className="modal-item modal-border"
              onClick={() => openLocationModal()}
            >
              <div className="modal-title">LOCATION</div>
              <div className="modal-location">
                {location ? location : "Add Location"}
              </div>
            </div>
            <div
              className="modal-item modal-border"
              onClick={() => openGuestModal()}
            >
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
          <div className={`location-menu ${locationFocus ? "show" : ""}`}>
            <div
              className="location-item"
              onClick={() => changeLocation("Helsinki, Finland")}
            >
              <span className="material-icons location-icon">location_on</span>
              Helsinki, Finland
            </div>
            <div
              className="location-item"
              onClick={() => changeLocation("Turku, Finland")}
            >
              <span className="material-icons location-icon">location_on</span>
              Turku, Finland
            </div>
            <div
              className="location-item"
              onClick={() => changeLocation("Oulu, Finland")}
            >
              <span className="material-icons location-icon">location_on</span>
              Oulu, Finland
            </div>
            <div
              className="location-item"
              onClick={() => changeLocation("Vaasa, Finland")}
            >
              <span className="material-icons location-icon">location_on</span>
              Vaasa, Finland
            </div>
          </div>
          <div className={`guest-menu ${guestFocus ? "show" : ""}`}>
            <div className="guest-item">
              <div className="guest-title">Adults</div>
              <div className="guest-desc">Ages 13 or above</div>
              <button className="guest-btn" onClick={() => decreaseAdults()}>
                -
              </button>
              {adultNumber}
              <button className="guest-btn" onClick={() => increaseAdults()}>
                +
              </button>
            </div>
            <div className="guest-item">
              <div className="guest-title">Children</div>
              <div className="guest-desc">Ages 2-12</div>
              <button className="guest-btn" onClick={() => decreaseChildren()}>
                -
              </button>
              {childrenNumber}
              <button className="guest-btn" onClick={() => increaseChildren()}>
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
