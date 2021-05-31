import React, { useEffect } from "react";
const LETTERS = ["A", "B", "C", "D"];
const Answers = ({ question, handleAnswer }) => {
  console.log(question);
  const { answers } = question;
  return (
    <div className="answers">
      {answers.map((ans, index) => {
        return (
          <div
            className="quiz-answer"
            key={index}
            onClick={() => handleAnswer(index)}
          >
            <div className="quiz-letter">{LETTERS[index]}</div>
            {ans}
          </div>
        );
      })}
    </div>
  );
};

export default Answers;
