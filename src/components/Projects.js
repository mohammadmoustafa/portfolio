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
														data-place="top"
														data-effect="solid"
														data-type="light" />,
		java: <Java width="36px" height="36px" className="icon"
								data-tip="Java"
								data-for={props.title}
								data-place="top"
								data-effect="solid"
								data-type="light" />,
		c: <C width="36px" height="36px" className="icon"
					data-tip="C"
					data-for={props.title}
					data-place="top"
					data-effect="solid"
					data-type="light" />,
		python: <Python width="36px" height="36px" className="icon"
										data-tip="Python"
										data-for={props.title}
										data-place="top"
										data-effect="solid"
										data-type="light" />,
		nodejs: <NodeJS width="36px" height="36px" className="icon"
										data-tip="NodeJS"
										data-for={props.title}
										data-place="top"
										data-effect="solid"
										data-type="light" />,
		react: <ReactLogo width="36px" height="36px" className="icon"
											data-tip="React"
											data-for={props.title}
											data-place="top"
											data-effect="solid"
											data-type="light" />,
		redis: <Redis width="36px" height="36px" className="icon"
											data-tip="Redis"
											data-for={props.title}
											data-place="top"
											data-effect="solid"
											data-type="light" />,
		materialui: <MaterialUI width="36px" height="36px" className="icon"
													data-tip="Material UI"
													data-for={props.title}
													data-place="top"
													data-effect="solid"
													data-type="light" />,
	}

	return (
		<div className="Project">
			<div className="row"><img className="screenshot" src={ (props.image) ? props.image : "https://via.placeholder.com/512"} /></div>
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


Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut dignissim dui, eget ullamcorper odio. Ut rutrum efficitur purus, et cursus arcu porta ut. Pellentesque varius sollicitudin rutrum. Nam bibendum elit sit amet velit dapibus, eu accumsan magna efficitur. Sed risus ante, rhoncus eu semper a, luctus eu enim. Donec eget velit mauris. Duis ac condimentum ligula. Cras aliquet finibus arcu, et auctor neque pretium ornare. Donec non dolor id quam cursus ornare. Nullam molestie vestibulum egestas.

Aliquam aliquam arcu id auctor iaculis. Fusce a justo ac metus dictum rhoncus. Duis sed fermentum dui. Quisque accumsan luctus ex, non vestibulum mauris lobortis id. Nullam tempor iaculis justo, ac facilisis arcu auctor vel. Proin pellentesque congue felis maximus gravida. Vestibulum vehicula vitae lorem a fringilla. 
						</Project>
					</div>
				</React.Fragment>
		    }
	        </div>
		);
	}
}

export default Projects;