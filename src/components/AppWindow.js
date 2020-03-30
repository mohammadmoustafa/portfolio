import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactTooltip from 'react-tooltip';

import { 
	faMinus,
	faTimes,
	faCaretDown,
	faCaretUp,
	faCircle
} from '@fortawesome/free-solid-svg-icons'

import { Switch, Route } from 'react-router-dom';


import '../style/AppWindow.css';
import ExperienceSection from './ExperienceSection';
import Education from './Education';
import Projects from './Projects';
import Contact from './Contact';

class TitleBar extends Component {

	constructor(props) {
		super(props);
		this.state = {
			title: props.title,
		}
	}

	render() {
		return (
			<div className="TitleBar">
				<span className="fa-layers fa-fw" onClick={this.props.windowClose}>
					<FontAwesomeIcon icon={faCircle} style={{ color: `rgb(252, 91, 87)` }} />
					<FontAwesomeIcon icon={faTimes} transform="shrink-5" />
				</span>
				<span className="fa-layers fa-fw" onClick={this.props.windowMin}>
					<FontAwesomeIcon icon={faCircle} style={{ color: `rgb(229, 191, 60)` }} />
					<FontAwesomeIcon icon={faMinus} transform="shrink-7" />
				</span>
				
				<span className="fa-layers fa-fw" onClick={this.props.windowMax}>
					<FontAwesomeIcon icon={faCircle} style={{ color: `rgb(87, 192, 56)` }} />
					<FontAwesomeIcon icon={faCaretDown} transform="shrink-5 down-2 left-2 rotate-45"/>
					<FontAwesomeIcon icon={faCaretUp} transform="shrink-5 up-2 right-2 rotate-45"/>
				</span>
				<Switch>
					<Route exact path="/">
						<div className="title"></div>
					</Route>
					<Route path="/education">
						<div className="title">Education</div>
					</Route>
					<Route path="/experience">
						<div className="title">Experience</div>
					</Route>
					<Route path="/projects">
						<div className="title">Projects</div>
					</Route>
					<Route path="/contact">
						<div className="title">Contact Info</div>
					</Route>
				</Switch>
				
			</div>
		);
	}
}

class AppWindow extends Component {

	constructor(props) {
		super(props);
		this.state = {
			class: "AppWindow",
			visible: true,
		}
		this.close = this.close.bind(this);
		this.minimize = this.minimize.bind(this);
		this.maximize = this.maximize.bind(this);
	}

	close = () => {
		this.setState({ visible: false });
	}

	minimize = () => {
		this.setState({ class: "AppWindow-min" });
	}

	maximize = () => {
		if (this.state.class == "AppWindow") {
			this.setState({ class: "AppWindow-max" });
		} else {
			this.setState({ class: "AppWindow" });
		}
		
	}

	render() {
		return (
			<React.Fragment>
				{ this.state.visible &&
				<React.Fragment>
					<div className={this.state.class}>
						<TitleBar windowClose={this.close}
								  windowMin={this.minimize}
								  windowMax={this.maximize}
								  />
						<div className="content">
							<Switch>
								<Route exact path="/">
									<h1>Main Page!</h1>
								</Route>
								<Route path="/experience" component={ ExperienceSection } />
								<Route path="/education">
									<Education school="University of Toronto" gradYear="2020" program="Computer Science" />
								</Route>
								<Route path="/projects" component={ Projects } />
								<Route path="/contact" component={ Contact } />
							</Switch>
						</div>
					</div>
				</React.Fragment>}
			</React.Fragment>
		);
	}

}

export default AppWindow;