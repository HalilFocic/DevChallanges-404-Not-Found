import React, { useState, useEffect } from "react";
import globus from "./globus.svg";
import axios from "axios";
import Question from "./Question";
import Answers from "./Answers";
const fetchCountries = () => {
  axios.get(`https://restcountries.eu/rest/v2/all`).then((res) => {
    console.log(res);
  });
};
const Quiz = () => {
  const [allCountries, setAllCountries] = useState([]);
  const [tenQuestions, setTenQuestions] = useState([]);

  useEffect(() => {
    axios.get(`https://restcountries.eu/rest/v2/all`).then((res) => {
      setAllCountries(res.data);
      console.log(res);
      let countriesArray = [];
      for (var i = 0; i < 10; i++) {
        tenQuestions.push(
          res.data[Math.floor(Math.random() * res.data.length)]
        );
      }
      setTenQuestions(countriesArray);
      console.log(tenQuestions);
    });
  }, []);
  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <div className="quiz-title">COUNTRY QUIZ</div>
        <div className="quiz-icon">
          <img src={globus} />
        </div>
      </div>
      <div className="quiz-content">
        <Question />
        <Answers />
      </div>
    </div>
  );
};

export default Quiz;
