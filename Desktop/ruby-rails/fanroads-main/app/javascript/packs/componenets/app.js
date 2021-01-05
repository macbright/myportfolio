import React from 'react'
import { Route, Switch} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import Home from './home/home'
import SignIn from './session/sign_in'
import { LOGGEDINSTATUS } from '../action/type'

const App = () => {
	const dispatch = useDispatch();
	dispatch({ type: LOGGEDINSTATUS, payload: 'NOT_LOGGED_IN'});
	
	return (
		<div>
			<Switch>
				{/* <Route exact path='/' component={SignIn} /> */}
				<Route exact path='/' component={Home}/>
			</Switch>
		</div>
	)
}

export default App;