import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import ReactTooltip from 'react-tooltip';

import '../style/MenuBar.css';

class MenuBar extends Component {

	render() {

		return (
				<div className="MenuBar">
					<div data-tip="Made with React."
						 data-place="bottom"
						 data-effect="solid"
						 data-type="info"
						 data-offset="{'right': 60}"
						 data-background-color="#008288"
						 data-arrow-color={`rgba(255, 255, 255, 0)`}>
						 <FontAwesomeIcon id="react-icon" icon={faReact} transform="shrink-4" />
					</div>
					<div id="me" className="MenuOption"><strong>Mohamed Moustafa</strong></div>
					<div className="MenuOption">Education</div>
					<div className="MenuOption">Experience</div>
					<div className="MenuOption">Projects</div>
					<div className="MenuOption">Contact Info</div>
					<ReactTooltip />
				</div>
			);
	}

}

export default MenuBar;