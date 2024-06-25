// src/components/TypingArea.js
import React, { useState, useEffect } from 'react';

const TypingArea = ({ textToType, handleResults }) => {
    const [userInput, setUserInput] = useState('');
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);

    useEffect(() => {
        if (userInput.length === 1 && !startTime) {
            setStartTime(new Date());
        }

        if (userInput.length >= textToType.length && !endTime) {
            setEndTime(new Date());
            const timeTaken = (new Date() - startTime) / 1000;
            handleResults(timeTaken, userInput);
        }
    }, [userInput, textToType, startTime, endTime, handleResults]);

    const handleChange = (e) => {
        setUserInput(e.target.value);
    };

    const renderTextWithColor = () => {
        return textToType.split('').map((char, index) => {
            let color;
            if (index < userInput.length) {
                color = char === userInput[index] ? 'green' : 'red';
            }
            return <span key={index} style={{ color }}>{char}</span>;
        });
    };

    return (
        <div className="typing-area">
            <p>{renderTextWithColor()}</p>
            <textarea
                value={userInput}
                onChange={handleChange}
                disabled={!!endTime}
                placeholder="Start typing here..."
            />
        </div>
    );
};

export default TypingArea;
