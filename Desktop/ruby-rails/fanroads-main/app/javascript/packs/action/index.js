import { GETCURRENTUSER, LOGGEDINSTATUS } from './type';

export const getCurrentUser = file => ({
	type: GETCURRENTUSER,
	payload: file
})

export const loggedInStatus = text => ({
	type: LOGGEDINSTATUS,
	payload: text
})

