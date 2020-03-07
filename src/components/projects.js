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
					 <CardTitle style={{color: '#fff', height: '176px', 
					 	background: 'url(https://miro.medium.com/max/701/1*enrA3AWfNX6MdcZHPAmdSA.png) center / cover'}}>
							Calculator with React
					 </CardTitle>
					 <CardText>
						 This project comes after the introduction of the React JS framework. the main aim of the project is to 
						 learn how to build a very simple React application. 
						 Tools: Node.js, React, React-DOM, React-Create-App, npm, CSS, ES6
					 </CardText>
					 <CardActions>
						 <Button colored>Github</Button>
						 <Button colored>LiveDemo</Button>
					 </CardActions>
					 <CardMenu style={{color: '#fff'}}>
						 <IconButton name='share' />
					 </CardMenu>
				</Card>

				<Card shadow={5} style={{ minWidth: '450', margin: 'auto'}}>
					 <CardTitle style={{color: '#fff', height: '176px', 
					 	background: 'url(https://miro.medium.com/max/701/1*enrA3AWfNX6MdcZHPAmdSA.png) center / cover'}}>
							Calculator with React
					 </CardTitle>
					 <CardText>
						 This project comes after the introduction of the React JS framework. the main aim of the project is to 
						 learn how to build a very simple React application. 
						 Tools: Node.js, React, React-DOM, React-Create-App, npm, CSS, ES6
					 </CardText>
					 <CardActions>
						 <Button colored>Github</Button>
						 <Button colored>LiveDemo</Button>
					 </CardActions>
					 <CardMenu style={{color: '#fff'}}>
						 <IconButton name='share' />
					 </CardMenu>
				</Card>

				<Card shadow={5} style={{ minWidth: '450', margin: 'auto'}}>
					 <CardTitle style={{color: '#fff', height: '176px', 
					 	background: 'url(https://miro.medium.com/max/701/1*enrA3AWfNX6MdcZHPAmdSA.png) center / cover'}}>
							Calculator with React
					 </CardTitle>
					 <CardText>
						 This project comes after the introduction of the React JS framework. the main aim of the project is to 
						 learn how to build a very simple React application. 
						 Tools: Node.js, React, React-DOM, React-Create-App, npm, CSS, ES6
					 </CardText>
					 <CardActions>
						 <Button colored>Github</Button>
						 <Button colored>LiveDemo</Button>
					 </CardActions>
					 <CardMenu style={{color: '#fff'}}>
						 <IconButton name='share' />
					 </CardMenu>
				</Card>
				</div>
			)
		} else if(this.state.activeTab === 1){
			return(
				<div><h1> This is JavaScript</h1></div>
			)
		} else if(this.state.activeTab === 2){
			return(
				<div><h1> This is Ruby</h1></div>
			)
		} else if(this.state.activeTab === 3){
			return(
				<div><h1> This is Ruby on Rails</h1></div>
			)
		} else if(this.state.activeTab === 4){
			return(
				<div><h1> This is Html and CSS </h1></div>
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
						<Tab> Ruby </Tab>
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