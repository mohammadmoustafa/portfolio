import React from 'react';
import '../style/Experience.css';

class Experience extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			company: props.company,
			location: props.location,
			title: props.title,
			start: props.start,
			end: props.end,
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		e.preventDefault();
		alert(`You clicked me [${this.state.title}]!`);
	}

	render() {
		return (
				<div className="Experience">
					<div className="company">
						<div className="name">{this.state.company}</div>
						<div className="location">{this.state.location}</div>
					</div>
					<div className="info">
						<div className="title" onClick={this.handleClick}>{this.state.title}</div>
						<div className="date">{this.state.start} &mdash; {this.state.end}</div>
					</div>
					<div className="desc">{this.props.children}</div>
				</div>
			);
	}
}

export default Experience;