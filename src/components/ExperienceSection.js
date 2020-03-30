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
					<Experience company="University of Toronto"
		                    location="Toronto, Canada"
		                    title="Teaching Assistant"
		                    start="Sep 2017"
		                    end="Present">
			          <ul>
			            <li>Courses taught:
			            	<ul style={{ columnCount: 2, marginLeft: '-1.5rem' }}>
			            		<li>CSCC69: Operating Systems (x2)</li>
			            		<li>CSCC24: Principles of Programming Languages (x1)</li>
			            		<li>CSCB07: Software Design (x1)</li>
			            		<li>CSCA48: Introduction to Computer Science II (x4)</li>
			            		<li>CSCA08: Introduction to Computer Science I (x2)</li>
			            	</ul>
			            </li>
			            <li>Utilized techniques in education to design and deliver engaging lessons 
			            in the form of weekly tutorials, teaching over 150 students to date</li>
			            <li>Facilitated discussion among students by providing support through an online class forum</li>
			            <li>Encouraged student improvement through useful feedback provided while marking course evaluations such as assignments, midterms, and exams</li>
			          </ul>
			        </Experience>
			        <Experience company="Ontario Ministry of Education"
			                    location="Toronto, Canada"
			                    title="Full Stack Developer"
			                    start="Sep 2017"
			                    end="Dec 2017">
			          <ul>
			            <li>Engineered an in-house search engine solution for effective querying of ministry documents, which was previously done manually over the course of several weeks, using Spring Boot, expediting the knowledge collection phase</li>
			            <li>Utilized OracleXE and Java to create modular object models, making it easier to prototype new front-end designs</li>
			            <li>Incorporated the Watson NLU API alongside statistical methods to create a standardized ranking system for document searches</li>
			            <li>Extensively used Bootstrap and JavaScript libraries (including jQuery) to construct a front-end that was easily usable by employees of different backgrounds and levels of technical knowledge</li>
			          </ul>
			        </Experience>
		        </React.Fragment>
		    }
	        </div>
		);
	}
}

export default ExperienceSection;