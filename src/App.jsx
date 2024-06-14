
import React from "react";
import Header from "./components/Header";
import Scores from "./components/Score";
import {
  HTML_RESULTS,
  JAVA_RESULTS,
  PYTHON_RESULTS,
  ENGLISH_RESULTS,
} from "./data";

function App() {
  const batchName = "Hong Duyen";

  const courses = [
    { name: "HTML", results: HTML_RESULTS },
    { name: "JAVA", results: JAVA_RESULTS },
    { name: "PYTHON", results: PYTHON_RESULTS },
    { name: "ENGLISH", results: ENGLISH_RESULTS },
  ];

  return (
    <>
      <Header batchName={batchName} />
      <main className="scores-container">
        {courses.map((course, index) => (
          <Scores
            key={index}
            courseName={course.name}
            results={course.results}
          />
        ))}
      </main>
    </>
  );
}

export default App;
