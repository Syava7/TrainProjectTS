import React from 'react';
import './App.css';
import AppTitle from '../AppTitle/AppTitle';
import Accordion from '../Accordion/Accordion';
import Rating from '../Rating/Rating';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppTitle />
      </header>
      <Rating />
      <Accordion />
    </div>
  );
}

export default App;
