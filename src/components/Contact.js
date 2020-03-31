import React from 'react';
import '../style/Experience.css';

class Contact extends React.Component {

	constructor(props) {
		super(props);
		this.state = { visible: true };
	}

	render() {
		return (
			<div className="ExperienceSection">
				{ this.state.visible &&
				<React.Fragment>
					<h1>Contact!</h1>
		        </React.Fragment>
		    }
	        </div>
		);
	}
}

export default Contact;