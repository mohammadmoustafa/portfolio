import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import ReactTooltip from 'react-tooltip';
import { Link } from 'react-router-dom';

import '../style/MenuBar.css';

export default function MenuBar() {
	return (
			<div className="MenuBar">
				<div className="react-icon"
					 data-tip="Made with React."
					 data-place="bottom"
					 data-effect="solid"
					 data-type="info"
					 data-offset="{'right': 80}"
					 data-background-color="#008288"
					 data-arrow-color={`rgba(255, 255, 255, 0)`}>
					 <FontAwesomeIcon id="react-icon" icon={faReact}  />
				</div>
					<div className="MenuOption">
						<Link to="/" id="me">Mohamed Moustafa</Link>
					</div>
					<div className="MenuOption"><Link to="/education">Education</Link></div>
					<div className="MenuOption"><Link to='/experience'>Experience</Link></div>
					<div className="MenuOption"><Link to='/projects'>Projects</Link></div>
					<div className="MenuOption"><Link to='/contact'>Contact Info</Link></div>
					<div className="MenuOption"><Link to=''>Icons8</Link></div>
					<ReactTooltip />
			</div>
		);

}