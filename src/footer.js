import React, { Component } from 'react'

export default class Footer extends Component {
	render() {
		return (
			<div className="social-links-footer">
				<a href="https://www.linkedin.com/in/bright-okike-b84b09110/"
					rel="noopener noreferrer" target="_blank">
					<i className="fa fa-linkedin-square"  aria-hidden="true" />
				</a>
				<a href="https://medium.com/@brightokike"
					rel="noopener noreferrer" target="_blank">
					<i className="fa fa-medium"  aria-hidden="true" />
				</a>
				<a href="https://github.com/macbright"
					rel="noopener noreferrer" target="_blank">
					<i className="fa fa-github-square"  aria-hidden="true" />
				</a>						
			</div>
		)
	}
}
