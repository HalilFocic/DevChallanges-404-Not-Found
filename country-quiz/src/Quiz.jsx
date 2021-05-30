import React from "react";
import globus from "./globus.svg";
import axios from "axios";

const Quiz = () => {
  const [allCountries, setAllCountries] = useState([]);
  const [tenQuestions, setTenQuestions] = useState([]);
  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <div className="quiz-title">COUNTRY QUIZ</div>
        <div className="quiz-icon">
          <img src={globus} />
        </div>
      </div>
      <div className="quiz-content">
        <div className="quiz-question">What is capital of Bosnia?</div>
      </div>
    </div>
  );
};

export default Quiz;
