import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { getBeers } from "./utils.js";

function App() {
  useEffect(() => {
    const init = async () => {
      const beers = await getBeers();
      console.log(beers);
    };
    init();
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
