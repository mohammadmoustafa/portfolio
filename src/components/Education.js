import React from 'react';
import '../style/Education.css';

class Education extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			visible: true,
			school: props.school,
			program: props.program,
			gradYear: props.gradYear,
		};
	}

	render() {
		return (
			<div className="ExperienceSection">
				{ this.state.visible &&
				<React.Fragment>
					<h1>Education!</h1>
		        </React.Fragment>
		    }
	        </div>
		);
	}
}

export default Education;