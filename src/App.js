// src/App.js
import React, { useState } from 'react';
import TypingArea from './components/TypingArea';
import Results from './components/Results';
import './index.css';

const generateRandomText = () => {
  const subjects = ["The quick brown fox", "A lazy dog", "A clever cat", "An agile monkey"];
  const verbs = ["jumps over", "runs around", "sits on", "looks at"];
  const objects = ["the lazy dog", "a high fence", "a small mouse", "the big tree"];

  const patterns = [
    `${subjects[Math.floor(Math.random() * subjects.length)]} ${verbs[Math.floor(Math.random() * verbs.length)]} ${objects[Math.floor(Math.random() * objects.length)]}`,
    `${subjects[Math.floor(Math.random() * subjects.length)]} and ${subjects[Math.floor(Math.random() * subjects.length)]} ${verbs[Math.floor(Math.random() * verbs.length)]}`,
    `In the park, ${subjects[Math.floor(Math.random() * subjects.length)]} ${verbs[Math.floor(Math.random() * verbs.length)]} ${objects[Math.floor(Math.random() * objects.length)]}`
  ];

  return patterns[Math.floor(Math.random() * patterns.length)];
};

const App = () => {
  const [textToType] = useState(generateRandomText());
  const [results, setResults] = useState(null);

  const handleResults = (timeTaken, userInput) => {
    const wordsTyped = userInput.trim().split(' ').length;
    const correctChars = textToType.split('').filter((char, index) => char === userInput[index]).length;
    const accuracy = (correctChars / textToType.length) * 100;
    const totalErrors = textToType.length - correctChars;
    const wordsPerSecond = wordsTyped / timeTaken;
    setResults({ timeTaken, accuracy, totalErrors, wordsPerSecond });
  };

  return (
    <div className="App">
      <h1>Typing Practice</h1>
      {!results ? (
        <TypingArea textToType={textToType} handleResults={handleResults} />
      ) : (
        <Results
          timeTaken={results.timeTaken}
          accuracy={results.accuracy.toFixed(2)}
          totalErrors={results.totalErrors}
          wordsPerSecond={results.wordsPerSecond}
        />
      )}
    </div>
  );
};

export default App;
