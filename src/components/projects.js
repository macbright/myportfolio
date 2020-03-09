import React, { Component } from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
	constructor(props){
		super(props);
		this.state = {activeTab: 0}
	}

	toggleCategories(){
		if(this.state.activeTab === 0){
			return(
				<div className="projects-grid">
					<Card shadow={5} style={{ minWidth: '450', margin: 'auto'}}>
					 <CardTitle style={{color: '#fff', height: '176px', fontWeight: 'bolder',
					 	background: 'url(https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png) center / cover'}}>
							Calculator with React
					 </CardTitle>
					 <CardText>
						 This project comes after the introduction of the React JS framework. the main aim of the project is to 
						 learn how to build a very simple React application. 
						 Tools: Node.js, React, React-DOM, React-Create-App, npm, CSS, ES6
					 </CardText>
					 <CardActions>
						 	<a href="https://github.com/macbright/calculator.git"
								rel="noopener noreferrer" target="_blank" >
								Github
							</a>	
							<a href="https://r-calculator.herokuapp.com/"
								rel="noopener noreferrer" target="_blank" >
								Live Demo
							</a>
					 </CardActions>
					 <CardMenu style={{color: '#fff'}}>
						 <IconButton name='share' />
					 </CardMenu>
				</Card>
					<Card shadow={5} style={{ minWidth: '450', margin: 'auto'}}>
					 <CardTitle style={{color: '#fff', height: '176px', 
					 	background: 'url(https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png) center / cover'}}>
							Book Store
					 </CardTitle>
					 <CardText>
						 This project comes after the introduction of the React &amp; Redux JS framework. The main aim of the project 
						 is to learn how to build a very simple React application using Redux as a state management 
						 system. 
						 Tools: Node.js, React, React-DOM, React-Create-App, Redux, react-redux, npm, CSS, ES6
					 </CardText>
					 <CardActions>
						 <a href="https://github.com/macbright/bookstore.git"
								rel="noopener noreferrer" target="_blank" >
								Github
							</a>	
							<a href="https://serene-golick-bd6385.netlify.com/"
								rel="noopener noreferrer" target="_blank" >
								Live Demo
							</a>
					 </CardActions>
					 <CardMenu style={{color: '#fff'}}>
						 <IconButton name='share' />
					 </CardMenu>
				</Card>
				</div>
			)
		} else if(this.state.activeTab === 1){
			return(
				<div>
					<div className="projects-grid">
						<Card shadow={5} style={{ minWidth: '450', margin: 'auto'}}>
						<CardTitle style={{color: '#fff', height: '176px',
							background: 'url(https://www.computerfever.com/wp-content/uploads/2016/04/javascript-featured.png) center / cover'}}>
								To Do List
						</CardTitle>
						<CardText>
							A practical demonstration of designing a website with javascript(webpack) This 
							project is designed with a Javascript(ES6) to emulate a todo list app.
							Tools: HTML, CSS, Javascript, webpack
						</CardText>
						<CardActions>
								<a href="https://github.com/Forison/Js-to-do-list.git"
									rel="noopener noreferrer" target="_blank" >
									Github
								</a>	
								<a href="https://raw.githack.com/Forison/Js-to-do-list/homepage/dist/index.html"
									rel="noopener noreferrer" target="_blank" >
									Live Demo
								</a>
						</CardActions>
						<CardMenu style={{color: '#fff'}}>
							<IconButton name='share' />
						</CardMenu>
					</Card>
						<Card shadow={5} style={{ minWidth: '450', margin: 'auto'}}>
						<CardTitle style={{color: '#fff', height: '176px',
							background: 'url(https://www.computerfever.com/wp-content/uploads/2016/04/javascript-featured.png) center / cover'}}>
								Weather App
						</CardTitle>
						<CardText>
							A practical demonstration of designing a website with javascript(API) This project is designed with a Javascript(ES6) 
							to emulate a weather forecast site using weather.
							Tools: HTML, CSS, Javascript, webpack
						</CardText>
						<CardActions border>
								<a href="https://github.com/macbright/weather-app.git"
									rel="noopener noreferrer" target="_blank" >
									Github
								</a>	
								<a href="https://raw.githack.com/macbright/weather-app/weather/dist/index.html"
									rel="noopener noreferrer" target="_blank" >
									Live Demo
								</a>
						</CardActions>
						<CardMenu style={{color: '#fff'}}>
							<IconButton name='share' />
						</CardMenu>
					</Card>
						<Card shadow={5} style={{ minWidth: '450', margin: 'auto'}}>
						<CardTitle style={{color: '#fff', height: '176px',
							background: 'url(https://www.computerfever.com/wp-content/uploads/2016/04/javascript-featured.png) center / cover'}}>
								BattleShip Game
						</CardTitle>
						<CardText>
							This is a Test Driven Development of the battleship game. 
							Tools: HTML, CSS, Javascript, webpack, Jest
						</CardText>
						<CardActions border>
								<a href="https://github.com/Forison/battleShip.git"
									rel="noopener noreferrer" target="_blank" >
									Github
								</a>	
								<a href="https://raw.githack.com/Forison/battleShip/battleship/dist/index.html"
									rel="noopener noreferrer" target="_blank" >
									Live Demo
								</a>
						</CardActions>
						<CardMenu style={{color: '#fff'}}>
							<IconButton name='share' />
						</CardMenu>
					</Card>
					</div>
					<div className="projects-grid second-row">
						<Card shadow={5} style={{ minWidth: '450', margin: 'auto'}}>
							<CardTitle style={{color: '#fff', height: '176px',
								background: 'url(https://www.computerfever.com/wp-content/uploads/2016/04/javascript-featured.png) center / cover'}}>
									Restuarant Page
							</CardTitle>
							<CardText>
								The main goal of this project is for the student to show the understanding of the benefits of modularized code as well as the ability 
								to set up a javascript application made of different modules using webpack
								Tools: HTML, CSS, Javascript
							</CardText>
							<CardActions border>
									<a href="https://github.com/macbright/restaurant.git"
										rel="noopener noreferrer" target="_blank" >
										Github
									</a>	
									<a href="https://raw.githack.com/macbright/restaurant/main-dev/dist/index.html"
										rel="noopener noreferrer" target="_blank" >
										Live Demo
									</a>
							</CardActions>
							<CardMenu style={{color: '#fff'}}>
								<IconButton name='share' />
							</CardMenu>
						</Card>
						<Card shadow={5} style={{ minWidth: '450', margin: 'auto'}}>
							<CardTitle style={{color: '#fff', height: '176px',
								background: 'url(https://www.computerfever.com/wp-content/uploads/2016/04/javascript-featured.png) center / cover'}}>
									Tic-Tac-Toe JavaScript
							</CardTitle>
							<CardText>
								This project is practical demonstration of designing a web base tic-tac-toe game with javascript. It is designed with a 
								plain vanilla Javascript to emulate a web based tic-tac-toe game
								Tools: HTML, CSS, Javascript
							</CardText>
							<CardActions border>
									<a href="https://github.com/macbright/JS-tic-tac-toe.git"
										rel="noopener noreferrer" target="_blank" >
										Github
									</a>	
									<a href="https://raw.githack.com/macbright/JS-tic-tac-toe/tic-tac-toe/index.html"
										rel="noopener noreferrer" target="_blank" >
										Live Demo
									</a>
							</CardActions>
							<CardMenu style={{color: '#fff'}}>
								<IconButton name='share' />
							</CardMenu>
						</Card>
						<Card shadow={5} style={{ minWidth: '450', margin: 'auto'}}>
							<CardTitle style={{color: '#fff', height: '176px',
								background: 'url(https://www.computerfever.com/wp-content/uploads/2016/04/javascript-featured.png) center / cover'}}>
									Library Project JavaScript
							</CardTitle>
							<CardText>
								A practical demonstration of designing a website with javascript This project is designed with a 
								plain vanilla Javascript to emulate a bookstore
								Tools: HTML, CSS, Javascript
							</CardText>
							<CardActions border>
									<a href="https://github.com/Forison/library-project.git"
										rel="noopener noreferrer" target="_blank" >
										Github
									</a>	
									<a href="https://forison.github.io/library-project/"
										rel="noopener noreferrer" target="_blank" >
										Live Demo
									</a>
							</CardActions>
							<CardMenu style={{color: '#fff'}}>
								<IconButton name='share' />
							</CardMenu>
						</Card>

					</div>
				</div>
			)
		} else if(this.state.activeTab === 2){
			return(
				<div className="projects-grid">
					<Card shadow={5} style={{ minWidth: '450', margin: 'auto'}}>
						<CardTitle style={{color: '#fff', height: '176px',
							background: 'url(https://i.udemycdn.com/course/750x422/1414568_a0f3_2.jpg) center / cover'}}>
								Facebook Clone
						</CardTitle>
						<CardText>
							This project will only mock partial of Facebook functions to illustrate our knowledge on Ruby on Rails.
							User, Post, Comment &amp; Like are 4 main models we are going to build in this project.
							Some advance features will be implemented to increase the complexity of this project - such as "friending, 
							friend request, Login with Real Facebook Account, Feeding with all your posts and your friends' post"
						</CardText>
						<CardActions border>
								<a href="https://github.com/macbright/facebook-clone.git"
									rel="noopener noreferrer" target="_blank" >
									Github
								</a>	
								<a href="https://facebook-clone3.herokuapp.com/login"
									rel="noopener noreferrer" target="_blank" >
									Live Demo
								</a>
						</CardActions>
						<CardMenu style={{color: '#fff'}}>
							<IconButton name='share' />
						</CardMenu>
					</Card>
					<Card shadow={5} style={{ minWidth: '450', margin: 'auto'}}>
						<CardTitle style={{color: '#fff', height: '176px',
							background: 'url(https://i.udemycdn.com/course/750x422/1414568_a0f3_2.jpg) center / cover'}}>
								Busines Site
						</CardTitle>
						<CardText>
							 This project is a Business site, built for a business owner that sales Scratch card. it has a admin and a user login (login on github).
								- User can view posts, comment on posts, fund his/her wallet, purchase available cards.
								- Admin can create a post, create category. Admin can also add card types, cards, delete posts and edit, edit and delete cards etc.
								- I implemented a payment system for the user to be able to fund his/her wallet.
						</CardText>
						<CardActions border>
								<a href="https://github.com/macbright/fastfive_site.git"
									rel="noopener noreferrer" target="_blank" >
									Github
								</a>	
								<a href="https://fastfive-app.herokuapp.com/"
									rel="noopener noreferrer" target="_blank" >
									Live Demo
								</a>
						</CardActions>
						<CardMenu style={{color: '#fff'}}>
							<IconButton name='share' />
						</CardMenu>
					</Card>
					<Card shadow={5} style={{ minWidth: '450', margin: 'auto'}}>
						<CardTitle style={{color: '#fff', height: '176px',
							background: 'url(https://i.udemycdn.com/course/750x422/1414568_a0f3_2.jpg) center / cover'}}>
								Private Event
						</CardTitle>
						<CardText>
							 This is one of the projects on Ruby and Rails Tutorial. in this project we are to create a site similar 
							 to "Eventbrite" which allows users to create events and then manage user 
							 sign ups. Users can create events and send invitations and parties. Events take place at a 
							 specific date and at a location.
						</CardText>
						<CardActions border>
								<a href="https://github.com/macbright/private-events.git"
									rel="noopener noreferrer" target="_blank" >
									Github
								</a>	
								<a href="https://private-event-253.herokuapp.com/login"
									rel="noopener noreferrer" target="_blank" >
									Live Demo
								</a>
						</CardActions>
						<CardMenu style={{color: '#fff'}}>
							<IconButton name='share' />
						</CardMenu>
					</Card>
				</div>
			)
		} else if(this.state.activeTab === 3){
			return(
				<div><h1> This is Ruby on Rails</h1></div>
			)
		} 
	}

	render() {
		return (
			<div className="category-tabs">
				<Tabs activeTab={this.state.activeTab} 
					onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
						<Tab> React / React &amp; Redux </Tab>
						<Tab> JavaScript </Tab>
						<Tab> Ruby on Rails </Tab>
						<Tab> Html </Tab>
				</Tabs>		

				
					<Grid >
						<Cell col={12}>
							<div className="contect">{this.toggleCategories()}</div>
						</Cell>
					</Grid>		
					
			</div>
		)
	}
}

export default Projects;