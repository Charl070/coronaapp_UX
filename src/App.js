import React from 'react';
import './App.css';
import News from './Components/news'
import WorldNews from './Components/worldnews'
import Twitter from './Components/twitter';
import Safety from './Components/Safety';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PictureMap from './components/PictureMap';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

require('typeface-montserrat');
require('typeface-roboto');


function App() {
  return (
    <BrowserRouter>
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
      <Navigation/>
      <PictureMap/>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
