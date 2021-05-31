import React, { useState, useEffect } from "react";
import globus from "./globus.svg";
import axios from "axios";
import Question from "./Question";
import Answers from "./Answers";
import shuffle from "shuffle-array";
const fetchCountries = async () => {
  let returnArray = [];
  await axios.get(`https://restcountries.eu/rest/v2/all`).then((res) => {
    returnArray = res.data;
  });
  return returnArray;
};
const COUNTRIES = fetchCountries();

const Quiz = () => {
  const [allCountries, setAllCountries] = useState([]);
  const [tenQuestions, setTenQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);
  const [answered, setAnswered] = useState(false);

  const handleAnswer = (index) => {
    setAnswered(true);
  };
  const loadNextQuestion = () => {
    setAnswered(false);
    setCounter(counter + 1);
  };
  const setQuestions = (c) => {
    let countriesArray = [];
    for (var i = 0; i < 10; i++) {
      let randNum = Math.floor(Math.random() * c.length);
      let newQuestion = {
        country: c[randNum].name,
        capital: c[randNum].capital,
        flag: c[randNum].flag,
        questionType: i % 2 == 0 ? "capital" : "flag",
        answers: [],
      };
      if (i % 2 == 0) {
        newQuestion.answers.push(c[randNum].capital);
        newQuestion.answers.push(
          c[Math.floor(Math.random() * c.length)].capital
        );
        newQuestion.answers.push(
          c[Math.floor(Math.random() * c.length)].capital
        );
        newQuestion.answers.push(
          c[Math.floor(Math.random() * c.length)].capital
        );
        shuffle(newQuestion.answers);
        newQuestion.correctIndex = newQuestion.answers.indexOf(
          newQuestion.capital
        );
      } else {
        newQuestion.answers.push(c[randNum].name);
        newQuestion.answers.push(c[Math.floor(Math.random() * c.length)].name);
        newQuestion.answers.push(c[Math.floor(Math.random() * c.length)].name);
        newQuestion.answers.push(c[Math.floor(Math.random() * c.length)].name);
        shuffle(newQuestion.answers);
        newQuestion.correctIndex = newQuestion.answers.indexOf(
          newQuestion.country
        );
      }
      countriesArray.push(newQuestion);
    }
    setTenQuestions(countriesArray);
  };

  useEffect(async () => {
    let COUNTRIES = await fetchCountries();
    setAllCountries(COUNTRIES);
    setQuestions(COUNTRIES);

    setLoading(false);
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
        {!loading && (
          <>
            <Question question={tenQuestions[counter]} />
            <Answers
              question={tenQuestions[counter]}
              handleAnswer={handleAnswer}
            />
            <div
              className={`next-btn ${answered && "show-btn"}`}
              onClick={() => loadNextQuestion()}
            >
              Next
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;
