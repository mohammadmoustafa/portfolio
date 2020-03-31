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
			gradMonth: props.gradMonth,
			degree: props.degree,
		};
	}

	render() {
		const months = ['January', 'February', 'March', 'April', 'May', 'June',
										'July', 'August', 'September', 'October', 'November', 'December'];
		return (
			<div className="ExperienceSection">
				{ this.state.visible &&
				<React.Fragment>
					<div className="Education">
						<div className="school">{this.state.school}</div>
						<div className="info">
							<div className="degree">{this.state.degree} in {this.state.program}</div>
							<div className="grad">
								{ (new Date().getMonth() < this.state.gradMonth) && 'Expected' } Class of {months[this.state.gradMonth]}, {this.state.gradYear}
							</div>
						</div>
						<div className="extra">{this.props.children}</div>
					</div>
		    </React.Fragment>
		    }
	    </div>
		);
	}
}

export default Education;