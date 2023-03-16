import React from "react";
import "./JackStyle.css";

const JackAnimation = () => {
  const sentence = "Assegid Assefa".split("");

  return (
    <div>
      {sentence.map((letter, index) => {
        return <span key={index}>{letter}</span>;
      })}
    </div>
  );
};

export default JackAnimation;
