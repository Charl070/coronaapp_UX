import React from 'react';
import logo from './logo.svg';
import './App.css';
import News from './Components/news'
import WorldNews from './Components/worldnews'
import Twitter from './Components/twitter';
import Safety from './Components/Safety';


function App() {
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
      <News/>
      <WorldNews/>
      <Safety/>
      <Twitter/>
    </div>
  );
}

export default App;
