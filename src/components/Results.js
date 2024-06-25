// src/components/Results.js
import React from 'react';

const Results = ({ timeTaken, accuracy, totalErrors, wordsPerSecond }) => {
    return (
        <div className="results">
            <h2>Results</h2>
            <p>Time Taken: {timeTaken} seconds</p>
            <p>Accuracy: {accuracy}%</p>
            <p>Total Errors: {totalErrors}</p>
            <p>Words Per Second: {parseFloat(wordsPerSecond).toFixed(2)}</p>
        </div>
    );
};

export default Results;
