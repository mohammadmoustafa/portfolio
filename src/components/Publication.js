import React from 'react';
import '../style/Experience.css';

class Experience extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			authors: props.authors,
      title: props.title,
      year: props.year,
      publication: props.publication,
      publisher: props.publisher,
			url: props.url,
		}
	}

	render() {
		return (
				<div className="Publication text">
          <div className="authors">{this.state.authors.join(', ')}. {this.state.year}</div>
					<div className="title italic">{this.state.title}</div>
          <div className="publication">{this.state.publication}</div>
          <div className="publisher">{this.state.publisher}</div>
          <div className="url"><a href={this.state.url}>{this.state.url}</a></div>
				</div>
			);
	}
}

export default Experience;