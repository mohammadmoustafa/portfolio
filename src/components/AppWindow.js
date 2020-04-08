import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { 
	faMinus,
	faTimes,
	faCaretDown,
	faCaretUp,
	faCircle
} from '@fortawesome/free-solid-svg-icons';

import { Switch, Route } from 'react-router-dom';


import '../style/AppWindow.css';
import ExperienceSection from './ExperienceSection';
import Education from './Education';
import Projects from './Projects';
import Contact from './Contact';
import Publication from './Publication';

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
						<div className="title">Contact Info - Currently Seeking Full Time Positions!</div>
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
		if (this.state.class === "AppWindow") {
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
									
									<Education school="University of Toronto"
														 degree="Bachelor of Science"
														 gradMonth={7}
														 gradYear="2020"
														 program="Computer Science">
															 <div className="column" id="publications">
																 <div className="heading bold">Publications</div>
																	<Publication authors={['Brian Harrington', 'Jingyiran Li', 'Mohamed Moustafa', 'Marzieh Ahmadzadeh', 'Nick Cheng']}
																							 title="On the Effect of Question Ordering on Performance and Confidence in Computer Science Examinations."
																							 year="2019"
																							 publication="In Proceedings of the 50th ACM Technical Symposium on Computer Science Education (SIGCSE ’19)."
																							 publisher="Association for Computing Machinery, New York, NY, USA, 620–626."
																							 url="https://doi.org/10.1145/3287324.3287398" />
																</div>
															 <div className="row">
																<div className="column" id="courses">
																	<div className="heading bold">Courses</div>
																	<div className="heading-2 semi-bold italic">Software Engineering</div>
																	<ul className="text">
																		<li>Software Design</li>
																		<li>Introduction to Software Engineering</li>
																		<li>Programming on the Web</li>
																		<li>Engineering Large Software Systems</li>
																	</ul>
																	<div className="heading-2 semi-bold italic">Advanced Topics</div>
																	<ul className="text">
																		<li>Compiler Optimization</li>
																		<li>Computer Graphics</li>
																	</ul>
																	<div className="heading-2 semi-bold italic">Core CS Topics</div>
																	<ul className="text">
																		<li>Algorithm Design and Analysis</li>
																		<li>Operating Systems</li>
																		<li>Introduction to Databases</li>
																		<li>Design and Analysis of Data Structures</li>
																	</ul>
																</div>
																 <div className="column" id="committees">
																	<div className="heading bold">Committees</div>
																 	<div className="heading-2 semi-bold italic">Instructional Center 2<br />Project Planning Committee</div>
																	<div className="text">Student representative on the planning committee for a instructional 
																	building that will house the Computer Science, Mathematics, and Statistics department, as well as
																	classrooms and lecture halls for over 2000 students.</div>
																 </div>
																 <div className="column" id="clubs">
																 <div className="heading bold">Clubs</div>
																 <ul>
																 	<li className="text">Association of Mathematical and Computer Science Students</li>
																	<li className="text">Drama Society</li>
																	<li className="text">Model United Nations</li>
																</ul>
																 </div>
															 </div>
									</Education>
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