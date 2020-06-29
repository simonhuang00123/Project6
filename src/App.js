import React from "react";
import "./App.css";
import Question from "./question.js";
import questionData from "./question-data.json";

function App() {
  function a() {
    alert(questionData.questions[0].clue);
  }

  return (
    <div className="App">
      <h1> Jeopardy </h1>
      <div className="board">
        {/* Column - 1 (HISTORY) */}
        <div className="column">
          <Question 
            question={questionData.questions[0].clue}
            name={questionData.questions[0].answer}
            value={500}
          />
          <Question
            question={questionData.questions[1].clue}
            name={questionData.questions[1].answer}
            value={400}
          />
          <Question
            question={questionData.questions[2].clue}
            name={questionData.questions[2].answer}
            value={300}
          />
        </div>
        {/* Column - 2 (SPORTS) */}
        <div className="column">
          <Question
            question={questionData.questions[3].clue}
            name={questionData.questions[0].answer}
            value={500}
          />
          <Question
            question={questionData.questions[4].clue}
            name={questionData.questions[0].answer}
            value={400}
          />
          <Question
            question={questionData.questions[5].clue}
            name={questionData.questions[0].answer}
            value={300}
          />
        </div>
        {/* Column - 3 (TECH) */}
        <div className="column">
          <Question
            question={questionData.questions[6].clue}
            name={questionData.questions[0].answer}
            value={500}
          />
          <Question
            question={questionData.questions[7].clue}
            name={questionData.questions[0].answer}
            value={400}
          />
          <Question
            question={questionData.questions[8].clue}
            name={questionData.questions[0].answer}
            value={300}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
//questionData.questions[0].answer
