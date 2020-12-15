import React, { useState, useEffect } from 'react';
import Client from './api';
import './App.css';

function App() {
  const [phrases, setPhrases] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        let response = await Client.getEntries({
          content_type: 'maradonapp',
        });
        const data = await response.items;
        console.log(data);
        setPhrases(data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  return (
    <div className="app">
      <div className="card">
        {phrases.map((phrase) => (
          <h1 className="heading">{phrase.fields.phrases}</h1>
        ))}
        <button className="button" onClick={phrases}>
          <span>Dame un consejo Diego</span>
        </button>
      </div>
    </div>
  );
}

export default App;
