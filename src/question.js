import React from "react";
import questionData from "./question-data.json";
function Question(props) {
 
  return (
    <div>
      <div >
        <p> Question: {props.question}</p>
        <p> Answer: {props.name}</p>
        <p> Points: {props.value}</p>
      </div>
    </div>
  );
}

export default Question;
