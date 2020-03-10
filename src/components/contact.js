import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import bright from '../image/bright.jpg'

class Contact extends Component {
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
					</Cell>
					<Cell col={6}> 
						<h2> Contact Me</h2>
						<hr />
						<div className="contact-list">
							<List>
								<ListItem>
									<ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
										< i className="fa fa-phone-square" aria-hidden="true" />
										+375-2592-08788
									</ListItemContent>
								</ListItem>
								
								<ListItem>
									<ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
										< i className="fa fa-envelope" aria-hidden="true" />
										brightokike@gmail.com
									</ListItemContent>
								</ListItem>

								<ListItem>
									<ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
										< i className="fa fa-skype" aria-hidden="true" />
										brightlyl
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

export default Contact;