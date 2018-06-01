import axios from 'axios';
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER, FETCH_MESSAGE } from './types';

const ROOT_URL = 'http://localhost:3090';

export function signinUser({ email, password }, history) {
	return function(dispatch) {
		axios.post(`${ROOT_URL}/signin`, { email, password })
			.then(response => {
				dispatch({ type: AUTH_USER });
				localStorage.setItem('token', response.data.token);
				history.push('/home');
			})
			.catch(() => dispatch(authError('Bad Login Info')));
	}
}

export function signupUser({ email, password }, history) {
	return function(dispatch) {
		axios.post(`${ROOT_URL}/signup`, {email, password})
			.then(response => {
				dispatch({ type: AUTH_USER });
				localStorage.setItem('token', response.data.token);
				history.push('/home');
			})
			.catch(e => dispatch(authError(e.response.data.error)));
	}
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

export function fetchMessage() {
	return function(dispatch) {
		axios.get(ROOT_URL, {
			headers: { authorization: localStorage.getItem('token')}
		})
			.then(response => {
				dispatch({
					type: FETCH_MESSAGE,
					payload: response.data.message
				})
			});
	}
}