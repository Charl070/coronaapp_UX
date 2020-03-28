import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PictureMap from './PictureMap';
import Footer from './Footer';
import Navigation from './Navigation';

require('typeface-montserrat');
require('typeface-roboto');


function Home() {
  return (
    <div className="App">
    <PictureMap/>
      <Footer/>  
    </div>
  );
}

export default Home;
