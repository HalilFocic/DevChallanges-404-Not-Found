import React, { useState, useEffect } from "react";
import stays from "./stays.json";
const StaysList = () => {
  const [stayList, setStayList] = useState(stays);
  console.log(stayList);

  const fetchStays = () => {};
  useEffect(() => {
    fetchStays();
  }, []);
  return (
    <div className="stay-list">
      {stayList.map((stay, index) => {
        return (
          <div className="stay-item" key={index}>
            <img className="stay-picture" src={stay.photo} alt={stay.city} />
            <div className="stay-desc">
              <div className="stay-size">
                {stay.superHost && (
                  <span className="superhost">Super Host</span>
                )}
                {stay.type} . {stay.beds}{" "}
              </div>
              <div className="stay-star">
                <i className="material-icons star-icon">star</i>
                {stay.rating}
              </div>
            </div>

            <div className="stay-title">{stay.title}</div>
          </div>
        );
      })}
    </div>
  );
};

export default StaysList;
