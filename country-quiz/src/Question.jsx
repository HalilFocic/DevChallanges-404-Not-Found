import React from "react";

const Question = ({ question }) => {
  const { country, flag, capital, questionType } = question;
  if (questionType === "capital") {
    return <div className="quiz-question">What is capital of {country}?</div>;
  } else {
    return (
      <>
        <img
          className="question-image"
          src="https://restcountries.eu/data/tls.svg"
        />

        <div className="quiz-question">
          Which country does this flag belong to?
        </div>
      </>
    );
  }
};

export default Question;
