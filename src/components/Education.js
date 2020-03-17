import React from 'react';
import '../style/Education.css';

class Education extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			school: props.school,
			program: props.program,
			gradYear: props.gradYear,
		};
	}

	render() {
		return (
			<div className="Education">
				<div className="school">{this.state.school}</div>
				<div className="info">
					<p className="program">{this.state.program}</p>
					<p className="gradYear">{this.state.gradYear}</p>
				</div>
			</div>
		);
	}
}

export default Education;