import React from 'react';
import logo from './logo.svg';
import AppWindow from './components/AppWindow';
import MenuBar from './components/MenuBar';

import './App.css';

function App() {
  return (
    <div className="App">
    	<MenuBar />
    	<AppWindow title="Experience"/>
    </div>
  );
}

export default App;
