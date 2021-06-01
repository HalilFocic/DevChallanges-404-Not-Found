import React from "react";
import winner from "./kraj.svg";
const Result = ({ score }) => {
  return (
    <div className="results">
      <img src={winner} alt="winner" className="winner-pic" />
      <div className="result-title">Result</div>
      <div className="result-text">
        You got <span className="big-green">{score}</span> answers correct
      </div>
    </div>
  );
};

export default Result;
