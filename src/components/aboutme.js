import React, { Component } from 'react'
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'
import bright from '../image/bright.jpg'

class AboutMe extends Component {
	render() {
		return (
			<div className="contact-body">
				<Grid className="contact-grid">
					<Cell col={6}> 
						<h2> Bright Chukwuemeka Okike </h2>
						<img src={bright}
						alt="avatar"
						style={{height: '250px'}} />
						<p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>
							Surganova 47, campus 5, hostel 13 Minsk, 220100 Belarus
						</p>
						<div className="social-1">
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
					</Cell>
					<Cell col={6}> 
						<h2> About Me</h2>
						<hr />
						<div className="contact-list">
							<List>
								<ListItem>
									<ListItemContent >
										Possess excellent verbal and written communication skills
									</ListItemContent>
								</ListItem>
								
								<ListItem>
									<ListItemContent >
										Self-motivated, precise and dedicated
									</ListItemContent>
								</ListItem>

								<ListItem>
									<ListItemContent >
										 Ability to achieve short term and long term objectives
									</ListItemContent>
								</ListItem>
									<ListItem>
									<ListItemContent >
										 Possess good management and organizational skills
									</ListItemContent>
								</ListItem>
									<ListItem>
									<ListItemContent >
										 Ability to handle multiple tasks and work under pressure
									</ListItemContent>
								</ListItem>
							</List>
						</div>
						
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default AboutMe;
