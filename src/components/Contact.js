import React from 'react';
import ReactTooltip from 'react-tooltip';
import '../style/Experience.css';
import Headshot from '../media/headshot-min.JPG';
import { ReactComponent as Github } from '../media/github.svg';
import { ReactComponent as LinkedIn } from '../media/linkedin.svg';
import { ReactComponent as GoogleScholar } from '../media/google-scholar.svg';

import { 
	GoogleReCaptchaProvider,
	GoogleReCaptcha 
} from 'react-google-recaptcha-v3';

class Contact extends React.Component {

	constructor(props) {
		super(props);
		this.state = { 
			visible: true,
			verified: false,
		};
	}

	verifyCallback = (token) => {
		this.setState({verified: true});
	}


	render() {
		return (
			<div className="ExperienceSection">
				{ this.state.visible &&
				<React.Fragment>
					<GoogleReCaptchaProvider reCaptchaKey="6LdT-OcUAAAAAB0Cxgd6N8F0XUEN6maMfP3zpQJz">
						<GoogleReCaptcha onVerify={this.verifyCallback} />
					</GoogleReCaptchaProvider>
						<div className="row center"><img alt="headshot of Mohamed Moustafa" src={Headshot} className="image w-25" /></div>
						{ this.state.verified && 
						<React.Fragment>
							<div className="row heading bold center">Mohamed Moustafa</div>
							<div className="row heading-2 center">Currently seeking full time positions</div>
							<div className="row center" id="email"><a className="email" href={`mailto:mh.moustafa98@gmail.com`}>mh.moustafa98 [ at ] gmail.com</a></div>
							<div className="row center">
								<a href="https://www.github.com/mohammadmoustafa" target="_blank" rel="noopener noreferrer">
									<Github width="48px" height="48px" className="icon"
														data-tip="Github"
														data-place="bottom"
														data-effect="solid"
														data-type="info" />
								</a>
								<a href="https://www.linkedin.com/in/mohammadhmoustafa/" target="_blank" rel="noopener noreferrer">
									<LinkedIn width="48px" height="48px" className="icon"
														data-tip="LinkedIn"
														data-place="bottom"
														data-effect="solid"
														data-type="info" />
									</a>
									<a href="https://scholar.google.com/citations?user=YWpjenwAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
										<GoogleScholar width="48px" height="48px" className="icon"
														data-tip="Google Scholar"
														data-place="bottom"
														data-effect="solid"
														data-type="info" />
									</a>
									<ReactTooltip />
							</div>
						</React.Fragment>
						}
		    </React.Fragment>
		    }
	    </div>
		);
	}
}

export default Contact;