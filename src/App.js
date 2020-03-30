import React from 'react';
import logo from './logo.svg';
import AppWindow from './components/AppWindow';
import MenuBar from './components/MenuBar';

import { Switch, Route, withRouter } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
		<MenuBar />
		<AppWindow />
    </div>
  );
}

export default withRouter(App);
