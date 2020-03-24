import React, { Component } from 'react'
import {Grid, Cell} from 'react-mdl';
import bright from '../image/bright.jpg'

class LandingPage extends Component {
	render() {
		return (
			<div>
				<div style={{ width: '100%', margin: 'auto'}}>
					<Grid className="landing-grid">
						<Cell col={12}>
							<img 
								src={bright}
								alt="avatar photo"
								className="avatar-img"
							/>

							<div className="banner-text">
								< marquee> <h1> Full Stack Web Developer</h1> </marquee>
							
								<hr />
								<p> HTML/CSS | Bootstrap  | Semantic UI  | JavaSript  | Webpack  | React |  
									Angular | Ruby | Ruby on Rails | Postgre </p>
								<div className="social-links">
									<a href="https://www.linkedin.com/in/bright-okike-b84b09110/"
										rel="noopener noreferrer" target="_blank">
										<i className="fa fa-linkedin-square"  aria-hidden="true" />
									</a>
									<a href="https://github.com/macbright"
										rel="noopener noreferrer" target="_blank">
										<i className="fa fa-github-square"  aria-hidden="true" />
									</a>							
								</div>
							</div>
						</Cell>
					</Grid>
				</div>
			</div>
		)
	}
}

export default LandingPage;