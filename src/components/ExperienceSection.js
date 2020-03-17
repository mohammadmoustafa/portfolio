import React from 'react';
import Experience from './Experience';
import '../style/Experience.css';

class ExperienceSection extends React.Component {

	constructor(props) {
		super(props);
		this.state = { visible: true };
	}

	render() {
		return (
			<div className="ExperienceSection">
				{ this.state.visible &&
				<React.Fragment>
					<div className="section-header">Experience</div>
					<Experience company="University of Toronto"
		                    location="Toronto, Canada"
		                    title="Teaching Assistant"
		                    start="Sep 2017"
		                    end="Present">
			          <ul>
			            <li>CSCC69: Operating Systems, Winter 2020</li>
			            <li>CSCB07: Software Design, Fall 2019</li>
			          </ul>
			        </Experience>
			        <Experience company="Ontario Ministry of Education"
			                    location="Toronto, Canada"
			                    title="Full Stack Developer"
			                    start="Sep 2017"
			                    end="Dec 2017">
			          <ul>
			            <li>IBM Watson</li>
			          </ul>
			        </Experience>
		        </React.Fragment>
		    }
	        </div>
		);
	}
}

export default ExperienceSection;