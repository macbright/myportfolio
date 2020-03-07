import React, { Component } from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
	constructor(props){
		super(props);
		this.state = {activeTab: 0}
	}

	toggleCategories(){
		if(this.state.activeTab === 0){
			return(
				<Card shadow={5} style={{ minWidth: '450', margin: 'auto'}}>
					 <CardTitle style={{color: '#fff', height: '176px', 
					 	background: ''}}>
							React / React &amp; Redux
					 </CardTitle>
				</Card>
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

				<section className="projects-grid">
					<Grid className="projects-grid">
						<Cell col={12}>
							<div className="contect">{this.toggleCategories()}</div>
						</Cell>
					</Grid>		
				</section>		
			</div>
		)
	}
}

export default Projects;