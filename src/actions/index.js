import axios from 'axios';
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER, FETCH_MESSAGE } from './types';

export const ROOT_URL = 'http://localhost:3090';

export const signinUser = ({ email, password }, history) => async dispatch => {
	try {
		const response = await axios.post(`${ROOT_URL}/signin`, { email, password })

		dispatch({ type: AUTH_USER });
		localStorage.setItem('token', response.data.token);
		history.push('/home');			
	} catch (e) {
		dispatch(authError('Bad Login Info'));
	}
}

export const signupUser = ({ email, password }, history) => async dispatch => {
	try {
		const response = await axios.post(`${ROOT_URL}/signup`, {email, password})
		
		dispatch({ type: AUTH_USER });
		localStorage.setItem('token', response.data.token);
		history.push('/home');
	} catch (e) {
		dispatch(authError(e.response.data.error));
	}
}

export const facebookSignin = (token, history) => dispatch => {
	dispatch({ type: AUTH_USER });
	localStorage.setItem('token', token);
	history.push('/home');
}

export function authError(error) {
	return {
		type: AUTH_ERROR,
		payload: error
	}
}

export function signoutUser(history) {
	localStorage.removeItem('token');
	
	return { type: UNAUTH_USER }
}

export const fetchMessage = () => async dispatch => {
	try {
		const response = await axios.get(ROOT_URL, { headers: { authorization: localStorage.getItem('token')} })
		
		dispatch({
			type: FETCH_MESSAGE,
			payload: response.data.message
		});
	} catch (e) {
		dispatch(authError(e.response.data.error));
	}
}