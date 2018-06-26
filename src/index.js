import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import reduxThunk from 'redux-thunk';

import Header from './components/header';
import FacebookAuth from './components/auth/facebookAuth';
import RequireAuth from './components/auth/require_auth';

import Welcome from './screens/welcome';
import Signin from './screens/signin';
import Signup from './screens/signup';
import Home from './screens/home';
import Profile from './screens/profile';
import Messages from './screens/messages';
import Saved from './screens/savedCards';

import reducers from './reducers';

import { AUTH_USER } from './actions/types';
import 'bootstrap/dist/css/bootstrap.min.css';

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
				<Route path='/profile' component={RequireAuth(Profile)}/>
				<Route path='/messages' component={RequireAuth(Messages)}/>
				<Route path='/saved' component={RequireAuth(Saved)}/>
			</div>
		</Router>
	</Provider>	
	, document.getElementById('root'));
