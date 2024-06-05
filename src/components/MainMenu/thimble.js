import React, { useState } from 'react';
import '../../assets/css/thimble.css'

const App = () => {
  const [glasses, setGlasses] = useState([1, 2, 3]);
  const [ballPosition, setBallPosition] = useState(null);
  const [message, setMessage] = useState('');

  const shuffleGlasses = () => {
    const shuffledGlasses = [...glasses].sort(() => Math.random() - 0.5);
    setGlasses(shuffledGlasses);
    const randomIndex = Math.floor(Math.random() * 3);
    setBallPosition(randomIndex);
    setMessage('');
  };

  const handleGlassClick = (index) => {
    if (index === ballPosition) {
      setMessage('Congratulations! You found the ball.');
    } else {
      setMessage('Oops! Try again.');
    }
  };

  return (
    <div className="App">
      <h1>3 Glass Thimble Game</h1>
      <div className="game-container">
        {glasses.map((glass, index) => (
          <div
            key={index}
            className={`glass ${index === ballPosition ? 'ball-under' : ''}`}
            onClick={() => handleGlassClick(index)}
          >
            {message && index === ballPosition && <div className="ball" />}
          </div>
        ))}
      </div>
      <button onClick={shuffleGlasses}>Play</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default App;
