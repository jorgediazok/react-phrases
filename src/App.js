import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [phrases, setPhrases] = useState('');

  const fetchPhrase = async () => {
    let response = await axios.get('https://api.adviceslip.com/advice');
    let phrases = response.data.slip.advice;
    console.log(phrases);
    setPhrases(phrases);
  };

  useEffect(() => {
    fetchPhrase();
  }, []);

  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{phrases}</h1>
        <button className="button" onClick={fetchPhrase}>
          <span>Dame un consejo Diego</span>
        </button>
      </div>
    </div>
  );
}

export default App;
