import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import News from './Components/news';
import Twitter from './Components/twitter';
import Safety from './Components/Safety';
import  Navigation from './Components/Navigation'



require('typeface-montserrat');
require('typeface-roboto');


function App() {
  return (
    <div className="App">
      <Navigation/>
      <Switch>
        <Route path="/" component={Home} exact key="home"/> 
        <Route path="/news" component={News} exact key="news"/>
        <Route path="/twitter" component={Twitter} exact key="twitter"/>
        <Route path="/safety" component={Safety} exact key="safety"/>
      </Switch>
    </div>
  );
}

export default App;
