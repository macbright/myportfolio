import React, { Component } from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import images from './images';

class Projects extends Component {
	constructor(props){
		super(props);
		this.state = {activeTab: 0}
	}

	toggleCategories(){
		if(this.state.activeTab === 0){
			return(
				<div className="projects-grid cards">
					<Card className="card" shadow={5} style={{ maxWidth: '450px', margin: 'auto'}}>
					 <CardTitle style={{height: '100%', 
					 	background: `url(${images[6].src}) center / cover`}}>
							<span	> React Calculator </span>
					 </CardTitle>
					 <CardText style={{ color: '#000', lineHeight: '1.5'}}>
						 This project comes after the introduction of the React JS framework. the main aim of the project is to 
						 learn how to build a very simple React application. <br/> <br />
						 <strong>Tools: </strong> Node.js, React, React-DOM, React-Create-App, npm, CSS, ES6
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
					<Card  className="card" shadow={5} style={{ maxWidth: '450px', margin: 'auto'}}>
					 <CardTitle style={{height: '200px', 
					 	background: `url(${images[1].src}) center / cover`}}>
							<span	> Book Store </span>
					 </CardTitle>
					 <CardText style={{ color: '#000', lineHeight: '1.5'}}>
						 This project comes after the introduction of the React &amp; Redux JS framework. The main aim of the project 
						 is to learn how to build a very simple React application using Redux as a state management 
						 system. <br/> <br />

						 <strong>Tools: </strong> Node.js, React, React-DOM, React-Create-App, Redux, react-redux, npm, CSS, ES6
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
					<Card  className="card" shadow={5} style={{ maxWidth: '450px', margin: 'auto'}}>
					 <CardTitle style={{height: '100%', 
					 	background: `url(${images[9].src}) center / cover`}}>
							<span	> Tic Tac Toe Game </span>
					 </CardTitle>
					 <CardText style={{ color: '#000', lineHeight: '1.5'}}>
						 This Project is a tictactoe game, designed using vanilla JavaScript <br/> <br />

						 <strong>Tools: </strong> Node.js, JavaScript, Webpack, npm, CSS, ES6
					 </CardText>
					 <CardActions>
						 <a href="https://github.com/macbright/JS-tic-tac-toe"
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
				</div>
			)
		} else if(this.state.activeTab === 1){
			return(
				
				<div className="projects-grid cards">
					<Card className="card"  shadow={5} style={{ maxWidth: '450px', margin: 'auto'}}>
					<CardTitle style={{height: '100%', 
					 	background: `url(${images[4].src}) center / cover`}}>
							<span	> Todo List (ES6) </span>
					 </CardTitle>
					 <CardText style={{ color: '#000', lineHeight: '1.5'}}>
						A practical demonstration of designing a website with javascript(webpack) This 
						project is designed with a Javascript(ES6) to emulate a todo list app.
						<br /> <br />
						<strong>Tools: </strong> HTML, CSS, Javascript, webpack
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
					<Card className="card"  shadow={5} style={{ maxWidth: '450px', margin: 'auto'}}>
					<CardTitle style={{height: '200px', 
					 	background: `url(${images[5].src}) center / cover`}}>
							<span	> Weather App </span>
					 </CardTitle>
					 <CardText style={{ color: '#000', lineHeight: '1.5'}}>
						A practical demonstration of designing a website with javascript(API) This project is designed with a Javascript(ES6) 
						to emulate a weather forecast site using weather. <br /> <br />
						<strong> Tools: </strong> HTML, CSS, Javascript, webpack
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
					<Card className="card" shadow={5} style={{ maxWidth: '450px', margin: 'auto'}}>
						<CardTitle style={{height: '200px', 
					 	background: `url(${images[0].src}) center / cover`}}>
							<span	> Battleship </span>
					 </CardTitle>
					 <CardText style={{ color: '#000', lineHeight: '1.5'}}>
						This is a Test Driven Development of the battleship game. <br /> <br />
						<strong>Tools: </strong> HTML, CSS, Javascript, webpack, Jest
					</CardText>
					<CardActions border>
							<a href="https://github.com/macbright/battleShip"
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
					
			)
		} else if(this.state.activeTab === 2){
			return(
				<div className="projects-grid cards">
					<Card className="card" shadow={5} style={{ maxWidth: '450px', margin: 'auto'}}>
						<CardTitle style={{height: '200px', 
					 	background: `url(${images[8].src}) center / cover`}}>
							<span	> Developer Connect </span>
					 </CardTitle>
					 <CardText style={{ color: '#000', lineHeight: '1.5'}}>
							This is project was built to mock some functions stack overflow website with additional feature 
							where developers can search for other developers, send and receive friend request, chat
							 realTime with developer friends, ask questions, answer questions, like a question or an answer.
							<br /> <br />
							<strong>Tools: </strong> HTML, CSS, Font-awesome, Bootstrap, Ruby, Rails, Rspec, Jquery, JavaScript
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
					<Card className="card" shadow={5} style={{ maxWidth: '450px', margin: 'auto'}}>
						<CardTitle style={{height: '200px', 
					 	background: `url(${images[3].src}) center / cover`}}>
							<span	> Business Site </span>
					 </CardTitle>
					 <CardText style={{ color: '#000', lineHeight: '1.5'}}>
							 This project is a Business site, built for a business owner that sales Scratch card. it has a admin and a user login (login on github).
								- User can view posts, comment on posts, fund his/her wallet, purchase available cards.
								- Admin can create a post, create category. Admin can also add card types, cards, delete posts and edit, edit and delete cards etc.
								- I implemented a payment system for the user to be able to fund his/her wallet.
								<br /> <br />
								<strong>Tools: </strong> <strong>Tools: </strong> HTML, CSS, Font-awesome, Bootstrap, Ruby, Rails, Rspec, JavaScript
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
					<Card className="card" shadow={5} style={{ maxWidth: '450px', margin: 'auto'}}>
						<CardTitle style={{height: '200px', 
					 	background: `url(${images[7].src}) center / cover`}}>
							<span	> Rails Bookstore App </span>
					 </CardTitle>
					 <CardText style={{ color: '#000', lineHeight: '1.5'}}>
							 This is a sample BookStore application built using Ruby on Rails. 
							 It's a bookstore app where you can add the category of the book, publisher, and the author.<br />

							The added category, publisher and author are been stored in the database. You can use the added info to add a book.

							<br /> You can be able to edit and delete the books added. There is no user authentication for now.

							<br /> <br /> <strong>Tools:</strong> HTML, CSS, Bootstrap, Ruby, Rails, Rspec
						</CardText>
						<CardActions border>
								<a href="https://github.com/macbright/book-store-app.git"
									rel="noopener noreferrer" target="_blank" >
									Github
								</a>	
								<a href="https://lovely-dry-tortugas-72041.herokuapp.com/"
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
		} 
	}

	render() {
		return (
			<div className="category-tabs">
				<Tabs activeTab={this.state.activeTab} 
					onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
						<Tab> React &amp; Redux </Tab>
						<Tab> JavaScript </Tab>
						<Tab> Ruby on Rails </Tab>
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