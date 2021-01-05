import React, {useState} from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { GETCURRENTUSER, LOGGEDINSTATUS } from '../../action/type'

const SignUp = ( ) => {
	const [state, setState] = useState({
     email:'',
     password: ''
  });
	const dispatch = useDispatch();
	const loggedInStatus = useSelector(state => state.loggedInStatus.payload);

	const handleChange = (event) => {
		const name = event.target.name
		const value = event.target.value
		console.log(value)
    setState({
			...state, [name]: value 
    });
  }

  const handleSubmit = (event) => {
    const { email, password } = state;
		event.preventDefault();

    axios
      .post(
        "http://127.0.0.1:3000/api/v1/registrations",
        {
          user: {
            email: email,
            password: password
          }
        },
        { withCredentials: true }
      )
      .then(response => {
					dispatch({ type: GETCURRENTUSER, payload: response.data.data.user});
					dispatch({ type: LOGGEDINSTATUS, payload: 'LOGGED_IN'});
          // this.props.handleSuccessfulAuth(response.data);
					console.log("user createdsuccessful", response)
					setState({ ...state, email: '', password: ''})  
      })
      .catch(error => {
        console.log("registration error", error);
      });
    
  }

    return (
      <div style={{margin: '50px'}}>
				<h2> Status: {loggedInStatus}  </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={state.email}
            onChange={handleChange}
            required
          />
					<br />
					<br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={state.password}
            onChange={handleChange}
            required
          />
					<br />
					<br />
          <button type="submit">Register</button>
        </form>
      </div>
    );
}

export default SignUp;