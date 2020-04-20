import React, { useState } from 'react';
import AppWindow from './components/AppWindow';
import MenuBar from './components/MenuBar';
import Folder from './components/Folder';
import File from './components/File';

import { withRouter, Switch, Route } from 'react-router-dom';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

import './App.css';

import Pdf from './Mohamed_Moustafa_Resume.pdf';
import Docx from './Mohamed_Moustafa_Resume.docx';

function App() {

  const [windowClass, setWindowClass] = useState("AppWindow");
  const [windowVisible, setWindowVisible] = useState(true);

  const minimize = () => {
    setWindowClass("AppWindow AppWindow-min");
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
    setWindowClass("AppWindow");
  }

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey="6LdT-OcUAAAAAB0Cxgd6N8F0XUEN6maMfP3zpQJz">
      <div className="App">
        <MenuBar />
        <div className="column" style={{ flex: '1', flexWrap: 'nowrap'}}>
          <div className="column" id="main-content">
            <Switch>
              <Route exact path="/"></Route>
              <Route>
                <AppWindow class={windowClass}
                                visible={windowVisible}
                                minimize={minimize}
                                maximize={maximize}
                                close={close}/>
                </Route>
            </Switch>
          </div>
          <div className="column folders" style={{ position: "absolute" }}>
            <Folder link="/education" caption="Education" handleClick={open}/>
            <Folder link="/experience" caption="Experience" handleClick={open}/>
            <Folder link="/projects" caption="Projects" handleClick={open}/>
            <Folder link="/contact" caption="Contact Info" handleClick={open}/>
            <File link={Pdf} caption="Resume.pdf" icon="pdf"/>
            <File link={Docx} caption="Resume.docx" icon="docx"/>
          </div>
        </div>
      </div>
    </GoogleReCaptchaProvider>
  );
}

export default withRouter(App);
