import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import reduxThunk from 'redux-thunk';

import Header from './components/header';
import Welcome from './components/welcome';
import Signin from './components/auth/signin';
import Signup from './components/auth/signup';
import FacebookAuth from './components/auth/facebookAuth';
import Home from './components/home';
import RequireAuth from './components/auth/require_auth';
import reducers from './reducers';

import { AUTH_USER } from './actions/types';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token');

if (token) {
	store.dispatch({ type: AUTH_USER });
}

render(
	<Provider store={store}>
		<Router>
			<div>
				<Header />
				<Route exact path='/' component={Welcome}/>
				<Route path='/signin' component={Signin}/>
				<Route path='/signup' component={Signup}/>
				<Route path='/auth/:token' component={FacebookAuth}/>
				<Route path='/home' component={RequireAuth(Home)}/>
			</div>
		</Router>
	</Provider>	
	, document.getElementById('root'));
