import React, { useState } from 'react';
import AppWindow from './components/AppWindow';
import MenuBar from './components/MenuBar';
import Folder from './components/Folder';

import { withRouter, Switch, Route } from 'react-router-dom';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

import './App.css';

function App() {

  const [windowClass, setWindowClass] = useState("AppWindow");
  const [windowVisible, setWindowVisible] = useState(true);

  const minimize = () => {
    setWindowClass("AppWindow-min");
  }

  const close = () => {
    setWindowVisible(false);
  }

  const maximize = () => {
    if (windowClass === "AppWindow") {
      setWindowClass("AppWindow-max");
		} else {
			setWindowClass("AppWindow");
    }
  }

  const open = () => {
    setWindowVisible(true);
  }

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey="6LdT-OcUAAAAAB0Cxgd6N8F0XUEN6maMfP3zpQJz">
      <div className="App">
        <MenuBar />
        <div className="row" style={{ flex: '1'}}>
          <div className="column" id="main-content">
            <Switch>
              <Route exact path="/"></Route>
              <Route><AppWindow class={windowClass}
                                visible={windowVisible}
                                minimize={minimize}
                                maximize={maximize}
                                close={close}/></Route>
            </Switch>
          </div>
          <div className="column folders">
            <Folder link="/education" caption="Education" handleClick={open}/>
            <Folder link="/experience" caption="Experience" handleClick={open}/>
            <Folder link="/projects" caption="Projects" handleClick={open}/>
            <Folder link="/contact" caption="Contact Info" handleClick={open}/>
          </div>
        </div>
      </div>
    </GoogleReCaptchaProvider>
  );
}

export default withRouter(App);
