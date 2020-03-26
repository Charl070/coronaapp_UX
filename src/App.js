import React from 'react';
import './App.css';
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
      <Navigation/>
      <PictureMap/>
      <Footer/>
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
    </BrowserRouter>
  );
}

export default App;
