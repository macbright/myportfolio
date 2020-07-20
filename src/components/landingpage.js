import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import bright from '../image/bright.jpg';
import Projects from './projects';

class LandingPage extends Component {
	render() {
		return (
			<div >
				<div className="landing-top" style={{ width: '100%', margin: 'auto', height: '90vh'}}>
					<Grid className="landing-grid">
						<Cell col={12}>
							<img 
								src={bright}
								alt="avatar photo"
								className="avatar-img"
							/>

							<div className="banner-text">
								<h2 style={{color:'white', fontWeight: 'bold', marginTop: '5px'}}> Frontend / Backend / Full Stack Web Developer </h2> 
								<hr />
								<p> HTML/CSS | Bootstrap  | Semantic UI  | JavaSript  | Webpack  | React |  
									Angular | Ruby | Ruby on Rails | Postgre </p>
								<div className="social-links">
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
							</div>
						</Cell>
					</Grid>
					
					<div className="body">
							<div class="box">
							<span></span>
							<span></span>
							<span></span>
							</div>
							
					</div>
					
				</div>
				<br/>
				<br />
			
				< Projects />
			</div>
			
		)
	}
}

export default LandingPage;