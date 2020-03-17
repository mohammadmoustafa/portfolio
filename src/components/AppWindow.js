import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { 
	faExpandAlt,
	faMinus,
	faTimes,
	faCaretDown,
	faCaretUp,
	faCircle
} from '@fortawesome/free-solid-svg-icons'

import { 
	faWindowMinimize,
} from '@fortawesome/free-regular-svg-icons'

import { faApple } from '@fortawesome/free-brands-svg-icons'
import '../style/AppWindow.css';
import ExperienceSection from './ExperienceSection';

class MenuBar extends Component {

	render() {
		return (
			<div className="MenuBar">
				<span className="fa-layers fa-fw">
					<FontAwesomeIcon icon={faCircle} style={{ color: `rgb(252, 91, 87)` }} />
					<FontAwesomeIcon icon={faTimes} transform="shrink-7" />
				</span>
				<span className="fa-layers fa-fw">
					<FontAwesomeIcon icon={faCircle} style={{ color: `rgb(229, 191, 60)` }} />
					<FontAwesomeIcon icon={faMinus} transform="shrink-7" />
				</span>
				<span className="fa-layers fa-fw">
					<FontAwesomeIcon icon={faCircle} style={{ color: `rgb(87, 192, 56)` }} />
					<FontAwesomeIcon icon={faCaretDown} transform="shrink-5 down-2 left-2 rotate-45"/>
					<FontAwesomeIcon icon={faCaretUp} transform="shrink-5 up-2 right-2 rotate-45"/>
				</span>
				<div className="title">Mohamed Moustafa</div>
			</div>
		);
	}
}

class AppWindow extends Component {

	constructor(props) {
		super(props);
		this.state = {
			minimized: false,
			closed: false,
			fullscreen: false,
		}
	}

	render() {
		return (
			<div className="AppWindow">
				<MenuBar />
				<div className="content">
				<ExperienceSection />
				</div>
			</div>
		);
	}

}

export default AppWindow;