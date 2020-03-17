import React from 'react';
import logo from './logo.svg';
import './App.css';
import Education from './components/Education';
import ExperienceSection from './components/ExperienceSection';
import AppWindow from './components/AppWindow';

// <Education school="University of Toronto" gradYear="2020" program="Computer Science" />
// <img src={logo} className="App-logo" alt="logo" />

function App() {
  return (
    <div className="App">
      <AppWindow />
    </div>
  );
}

export default App;
