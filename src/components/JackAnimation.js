import React from "react";
import "./JackStyle.css";
import TextSpan from "./TextSpan";

const JackAnimation = () => {
  const sentence = "Assegid Assefa".split("");

  return (
    <div>
      {sentence.map((letter, index) => {
        return <TextSpan key={index}>{letter}</TextSpan>;
      })}
    </div>
  );
};

export default JackAnimation;
