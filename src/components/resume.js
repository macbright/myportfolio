import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl';
import bright from '../image/bright.jpg'
import Education from './education';
import Experience from './experience';
import Skills from './skills'

class Resume extends Component {
	render() {
		return (
			<div>
				<Grid>
					<Cell className="resume-left-col" col={4}> 
						<div style={{textAlign: 'center'}}>
							<img src={bright}
							alt="avater"
							style={{height: '200px'}} />
						</div>
						<h2 style={{paddingTop: '1em'}}> Bright Okike</h2>
						<h4 style={{color: 'grey'}}>Programmer </h4>
						<hr style={{borderTop: '3px solid #033fb2'}} />
						<p> 
							JavaScript (ES5/ES6), Ruby, HTML5, CSS, Ruby on Rails, React,
							 Angular, jQuery, Bootstrap, SM UI, PostgreSql, RSpec, Jest,  
							 Git, GitHub, Webpack, Heroku,  SASS, Pair Programming
						</p>
						<hr style={{borderTop: '3px solid #033fb2'}} /> 
						<h5>Address</h5>
						<p>Surganova 47, campus 5, hostel 13 Minsk, 220100 Belarus </p>
						<h5>Phone</h5>
						<p>+375259208788</p>
						<h5>Email</h5>
						<p>brightokike@gmail.com</p>
						<hr style={{borderTop: '3px solid #033fb2'}} />
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
					<Cell className="resume-right-col" col={8}>
						<h2>Education</h2>
						<Education 
							startYear={2019}
							endYear={2020}
							schoolName="Microverse, Certificate"
							schoolDescription= {`Spent 1900+ hours mastering algorithms, 
							data structures, and full-stack development  while simultaneously 
							developing projects in Ruby, Rails, Javascript, React, and Redux, HTML5 & CSS.
							
							-  Developed skills in remote pair-programming, using Github, industry-standard 
							git flows, and daily standups to communicate and collaborate with 
							international remote developers.`}
						 />
						
						 <Education 
							startYear={2016}
							endYear={2020}
							schoolName="Belarusian National Technical University,"
							schoolDescription="Four Years degree course in Information System
							and Technology. Bachelor’s in Computer Science"		 
							/>
							<hr style={{borderTop: '3px solid #e22947'}} />
							<h2>Experience</h2>

							<Experience 
							startYear={2019}
							endYear="Present"
							jobName="Mentor at Microverse, (Remote)"
							jobDescription="I counsel my mentees weekly over video 
							calls sharing their achievements and challenges while learning 
							software development. I basically tell them stories or my story, 
							anything that will keep them going.	"		 
							/>

							<Experience 
							startYear={2019}
							endYear={2020}
							jobName="Social Media Ad Rater, (Remote)"
							jobDescription="Use an online tool, to analyze and give feedback on 
							specific content, such as web pages, texts or images.
							
							Evaluates the quality and relevance of information in my country of 
							residence in categories such as news feeds, advertisements and search results."		 
							/>

							<hr style={{borderTop: '3px solid #e22947'}} />
							<h2>Skills</h2>
							<Skills 
							skill="JavaScript"
							progress={80} />

							<Skills 
							skill="HTML / CSS"
							progress={80}
							/>
							<Skills 
							skill="React &amp; Redux"
							progress={50}
							/>
							<Skills 
							skill="Ruby"
							progress={70}
							/>

							<Skills 
							skill="Rails"
							progress={80}
							/>
						
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default Resume;