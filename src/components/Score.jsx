
import React from "react";
import PropTypes from "prop-types";


const Scores = ({ courseName, results }) => {
  return (
    <div className="scores">
      <h1>{courseName}</h1>
      <table>
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr key={index}>
              <td>{result.firstName}</td>
              <td>{result.lastName}</td>
              <td>{result.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Scores.propTypes = {
  courseName: PropTypes.string.isRequired,
  results: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Scores;
