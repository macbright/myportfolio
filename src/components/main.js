import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Projects from './projects';
import Contact from './contact';
import Resume from './resume';



const Main = () => {
	// eslint-disable-next-line no-unused-expressions
	return(
	<Switch>
		<Route exact path="/" component={LandingPage}/>
		<Route path="/aboutme" component={AboutMe}/>
		<Route path="/projects" component={Projects}/>
		<Route path="/contacts" component={Contact}/>
		<Route path="/resume" component={Resume}/>
	</Switch>)

}

export default Main