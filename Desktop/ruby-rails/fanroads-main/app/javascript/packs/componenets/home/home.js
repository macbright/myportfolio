import React, {useState} from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { GETCURRENTUSER, LOGGEDINSTATUS } from '../../action/type'
import SignUp from '../registration/sign_up';


const Home = ( ) => {
	const loggedInStatus = useSelector(state => state.loggedInStatus.payload);
	const current_user = useSelector(state => state.current_user.payload);
  const displayContent = () => {
		if (current_user){
			return (
			<div>
				<h2> Status: {loggedInStatus} </h2>
				<h5> Logged in as: {current_user.email}</h5>
			</div> )
		} else {
			return (
			<SignUp />
			)
		}
	}

    return (
			<div>
				{ displayContent() }
			</div>
    );
}

export default Home;