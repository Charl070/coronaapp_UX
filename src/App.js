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
    </div>
    </BrowserRouter>
  );
}

export default App;
