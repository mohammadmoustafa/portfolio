import React from 'react';
import ReactTooltip from 'react-tooltip';

import '../style/Projects.css';
import '../style/master.css';

import { ReactComponent as JavaScript } from '../media/javascript.svg';
import { ReactComponent as Java } from '../media/java.svg';
import { ReactComponent as C } from '../media/clang.svg';
import { ReactComponent as Python } from '../media/python.svg';
import { ReactComponent as NodeJS } from '../media/nodejs.svg';
import { ReactComponent as ReactLogo } from '../media/react.svg';
import { ReactComponent as Github } from '../media/github.svg';
import { ReactComponent as MaterialUI } from '../media/material-ui.svg';
import { ReactComponent as Redis } from '../media/redis.svg';

function Project(props) {

	const icons = {
		javascript: <JavaScript width="36px" height="36px" className="icon"
														data-tip="JavaScript"
														data-for={props.title}
														data-place="bottom"
														data-effect="solid"
														data-type="info" />,
		java: <Java width="36px" height="36px" className="icon"
								data-tip="Java"
								data-for={props.title}
								data-place="bottom"
								data-effect="solid"
								data-type="info" />,
		c: <C width="36px" height="36px" className="icon"
					data-tip="C"
					data-for={props.title}
					data-place="bottom"
					data-effect="solid"
					data-type="info" />,
		python: <Python width="36px" height="36px" className="icon"
										data-tip="Python"
										data-for={props.title}
										data-place="bottom"
										data-effect="solid"
										data-type="info" />,
		nodejs: <NodeJS width="36px" height="36px" className="icon"
										data-tip="NodeJS"
										data-for={props.title}
										data-place="bottom"
										data-effect="solid"
										data-type="info" />,
		react: <ReactLogo width="36px" height="36px" className="icon"
											data-tip="React"
											data-for={props.title}
											data-place="bottom"
											data-effect="solid"
											data-type="info" />,
		redis: <Redis width="36px" height="36px" className="icon"
											data-tip="Redis"
											data-for={props.title}
											data-place="bottom"
											data-effect="solid"
											data-type="info" />,
		materialui: <MaterialUI width="36px" height="36px" className="icon"
													data-tip="Material UI"
													data-for={props.title}
													data-place="bottom"
													data-effect="solid"
													data-type="info" />,
	}

	return (
		<div className="Project">
			<div className="row"><img alt="screenshot of project" className="screenshot" src={ (props.image) ? props.image : "https://via.placeholder.com/512"} /></div>
			<div className="row" id="metadata">
				<div className="column heading-1 semi-bold" style={{ justifyContent: 'center'}}>
					{props.title}
				</div>
				<div className="column" style={{ justifyContent: "center"}}>
					{ props.url && 
					<a href={props.url}><Github style={{height: '100%', paddingLeft: '5px', paddingRight: '5px'}}/></a>
					}
					</div>
				<div className="column" style={{ flexGrow: 1}}></div>
				<div className="row-reverse" style={{ maxWidth: '40%', flexWrap: "wrap" }}>
					{props.stack.map(item => (icons[item] ? icons[item] : item ))}
					<ReactTooltip id={props.title}/>
				</div>
			</div>
			<div className="row text">{props.children}</div>
		</div>
	)
}

class Projects extends React.Component {

	constructor(props) {
		super(props);
		this.state = { visible: true };
	}

	render() {
		return (
			<div className="ExperienceSection">
				{ this.state.visible &&
				<React.Fragment>
					<div className="Projects">
						<Project  title="TrendMap" stack={['javascript', 'react', 'nodejs', 'materialui', 'redis']} image={process.env.PUBLIC_URL + '/trendmap.png'}>
							<div className="text">
								TrendMap is a single-page web application developed for my web programming course during the COVID-19 pandemic. 
								It is an interactive map that allows users to see the top news stories and Reddit posts by country. 
								Users can select a country from the map and be able to see two tabs of posts - one for news stories, and one for Reddit posts - on the screen. 
								The application uses <span className="highlight">React</span>, <span className="highlight">Material UI</span>, and <span className="highlight">LeafletJS</span> for the front end, and connects to the backend using <span className="highlight">SocketIO</span>. 
								The backend is written in <span className="highlight">NodeJS</span> and uses <span className="highlight">Redis</span> for caching data, which is scraped using the <span className="highlight">News</span> and <span className="highlight">Reddit</span> APIs. 
								The data is updated hourly, so users are always seeing the most recent stories.
							</div>
						</Project>
					</div>
				</React.Fragment>
		    }
	        </div>
		);
	}
}

export default Projects;