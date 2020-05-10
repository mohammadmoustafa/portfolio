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
import { ReactComponent as Docker } from '../media/docker.svg';
import { ReactComponent as Electron } from '../media/electron.svg';
import { ReactComponent as TypeScript } from '../media/typescript.svg';
import { ReactComponent as Webpack } from '../media/webpack.svg';

function Project(props) {

	const icons = {
		javascript: <JavaScript width="36px" height="36px" className="icon"
			data-tip="JavaScript"
			data-for={props.title}
			data-place="bottom"
			data-effect="solid"
			data-type="info"
			key="javascript" />,
		java: <Java width="36px" height="36px" className="icon"
			data-tip="Java"
			data-for={props.title}
			data-place="bottom"
			data-effect="solid"
			data-type="info"
			key="java" />,
		c: <C width="36px" height="36px" className="icon"
			data-tip="C"
			data-for={props.title}
			data-place="bottom"
			data-effect="solid"
			data-type="info"
			key="c" />,
		python: <Python width="36px" height="36px" className="icon"
			data-tip="Python"
			data-for={props.title}
			data-place="bottom"
			data-effect="solid"
			data-type="info"
			key="python" />,
		nodejs: <NodeJS width="36px" height="36px" className="icon"
			data-tip="NodeJS"
			data-for={props.title}
			data-place="bottom"
			data-effect="solid"
			data-type="info"
			key="nodejs" />,
		react: <ReactLogo width="36px" height="36px" className="icon"
			data-tip="React"
			data-for={props.title}
			data-place="bottom"
			data-effect="solid"
			data-type="info"
			key="react" />,
		redis: <Redis width="36px" height="36px" className="icon"
			data-tip="Redis"
			data-for={props.title}
			data-place="bottom"
			data-effect="solid"
			data-type="info"
			key="redis" />,
		materialui: <MaterialUI width="36px" height="36px" className="icon"
			data-tip="Material UI"
			data-for={props.title}
			data-place="bottom"
			data-effect="solid"
			data-type="info"
			key="materialui" />,
		docker: <Docker width="36px" height="36px" className="icon"
			data-tip="Docker"
			data-for={props.title}
			data-place="bottom"
			data-effect="solid"
			data-type="info"
			key="docker" />,
		electron: <Electron width="36px" height="36px" className="icon"
			data-tip="Electron"
			data-for={props.title}
			data-place="bottom"
			data-effect="solid"
			data-type="info"
			key="electron" />,
		typescript: <TypeScript width="36px" height="36px" className="icon"
			data-tip="TypeScript"
			data-for={props.title}
			data-place="bottom"
			data-effect="solid"
			data-type="info"
			key="typescript" />,
		webpack: <Webpack width="36px" height="36px" className="icon"
			data-tip="Webpack"
			data-for={props.title}
			data-place="bottom"
			data-effect="solid"
			data-type="info"
			key="webpack" />,
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
						<Project title="electron-recipe" stack={['javascript', 'typescript', 'react', 'electron', 'webpack']}
							image={process.env.PUBLIC_URL + "/electron-recipe.png"} url="https://github.com/mohammadmoustafa/electron-recipe">
								<div className="text">
									Currently developing an Electron app meant to make it easier to store and divide/multiply recipes for cooking.
									I decided to develop this app because I wanted a low effort way to divide the recipes that I already had stored.
									The frontend is built using <span className="highlight">React</span> and <span className="highlight">Shards React</span>
									and is served to <span className="highlight">Electron</span> via <span className="highlight">Webpack</span>, with
									<span className="highlight">PouchDB</span> being used to store data locally.
								</div>
						</Project>
						<Project  title="TrendMap" stack={['javascript', 'react', 'nodejs', 'materialui', 'redis', 'docker']} image={process.env.PUBLIC_URL + '/trendmap.png'}>
							<div className="text">
								TrendMap is a single-page web application developed for my web programming course during the COVID-19 pandemic. 
								It is an interactive map that allows users to see the top news stories and Reddit posts by country. 
								Users can select a country from the map and be able to see two tabs of posts - one for news stories, and one for Reddit posts - on the screen. 
								The application uses <span className="highlight">React</span>, <span className="highlight">Material UI</span>, and <span className="highlight">LeafletJS</span> for the front end, and connects to the backend using <span className="highlight">SocketIO</span>. 
								The backend is written in <span className="highlight">NodeJS</span> and uses <span className="highlight">Redis</span> for caching data, which is scraped using the <span className="highlight">News</span> and <span className="highlight">Reddit</span> APIs. 
								The data is updated hourly, so users are always seeing the most recent stories.
							</div>
						</Project>
						<Project  title="mohammadmoustafa.tech" stack={['react']} image={process.env.PUBLIC_URL + '/mohammadmoustafatech.png'}>
							<div className="text">
								
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