import React, { useState, useEffect } from 'react';
import Client from './api';
import './App.css';

function App() {
  const [phrases, setPhrases] = useState('');

  const getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: 'maradonapp',
      });
      const data = await response.items;
      let randomNum = Math.floor(Math.random() * data.length);
      let randomPhrase = data[randomNum].fields.phrases;
      console.log(randomPhrase);
      setPhrases(randomPhrase);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handlePhrases = () => {
    getData();
  };

  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{phrases}</h1>
        <button className="button" onClick={handlePhrases}>
          <span>Dame un consejo Diego</span>
        </button>
      </div>
    </div>
  );
}

export default App;
