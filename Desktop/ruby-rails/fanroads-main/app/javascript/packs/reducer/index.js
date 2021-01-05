import {combineReducers} from 'redux';
import { GETCURRENTUSER, LOGGEDINSTATUS } from '../action/type';


const currentUserReducer = (state = {}, {type, payload}) =>{
	switch (type){
		case GETCURRENTUSER:
			return {...state, payload}
		default:
			return state;
	} 
}

const loggedInReducer = (state = {}, {type, payload}) =>{
	switch (type){
		case LOGGEDINSTATUS:
			return {...state, payload}
		default:
			return state;
	} 
}

const rootReducer = combineReducers({
	current_user: currentUserReducer,
	loggedInStatus: loggedInReducer
})

export default rootReducer;