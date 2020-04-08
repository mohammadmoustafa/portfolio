import React from 'react';
import AppWindow from './components/AppWindow';
import MenuBar from './components/MenuBar';

import { withRouter } from 'react-router-dom';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

import './App.css';

function App() {

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey="6LdT-OcUAAAAAB0Cxgd6N8F0XUEN6maMfP3zpQJz">
      <div className="App">
      <MenuBar />
      <AppWindow />
      </div>
    </GoogleReCaptchaProvider>
  );
}

export default withRouter(App);
