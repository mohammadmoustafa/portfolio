import React from 'react';
import AppWindow from './components/AppWindow';
import MenuBar from './components/MenuBar';

import { withRouter } from 'react-router-dom';

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
