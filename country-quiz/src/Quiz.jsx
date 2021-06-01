import React, { useState, useEffect } from "react";
import globus from "./globus.svg";
import axios from "axios";
import Question from "./Question";
import Answers from "./Answers";
import shuffle from "shuffle-array";
import Result from "./Result";
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
  const [lastClicked, setLastClicked] = useState(null);
  const [score, setScore] = useState(0);
  const handleAnswer = (index) => {
    if (answered) {
      return;
    }
    let tempAnswers = document.getElementsByClassName("quiz-answer");
    for (var i = 0; i < tempAnswers.length; i++) {
      tempAnswers[i].classList.toggle("quiz-answer-hover");
    }
    tempAnswers[index].classList.toggle("wrong");
    tempAnswers[tenQuestions[counter].correctIndex].classList.toggle("correct");
    if (index == tenQuestions[counter].correctIndex) {
      setScore(score + 1);
    }
    setLastClicked(index);
    setAnswered(true);
  };
  const loadNextQuestion = () => {
    let tempAnswers = document.getElementsByClassName("quiz-answer");
    for (var i = 0; i < tempAnswers.length; i++) {
      tempAnswers[i].classList.toggle("quiz-answer-hover");
    }
    tempAnswers[tenQuestions[counter].correctIndex].classList.toggle("correct");
    if (lastClicked != null) {
      tempAnswers[lastClicked].classList.toggle("wrong");
    }
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
        {!loading ? (
          counter < 10 ? (
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
          ) : (
            <Result score={score} />
          )
        ) : null}
      </div>
    </div>
  );
};

export default Quiz;
