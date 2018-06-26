import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions';

class Header extends Component {
	renderLinks() {
		if (this.props.authenticated) {
			return [
				<li className='nav-item' key={1}>
					<div className='nav-link' onClick={() => this.props.signoutUser()}>
						Sign Out
					</div>
				</li>,
				<li className='nav-item' key={2}>
					<Link className='nav-link' to='/profile'>Profile</Link>
				</li>,
				<li className='nav-item' key={3}>
					<Link className='nav-link' to='/saved'>Saved</Link>
				</li>,
				<li className='nav-item' key={4}>
					<Link className='nav-link' to='/messages'>Messages</Link>
				</li>
			];
		} else {
			return [
				<li className='nav-item' key={1}>
					<Link className='nav-link' to='/signin'>Sign In</Link>
				</li>,
				<li className='nav-item' key={2}>
					<Link className='nav-link' to='/signup'>Sign Up</Link>
				</li>
			];
			
		}
	}

	renderLogo() {
		if (this.props.authenticated) {
			return (<Link to='/home' className='navbar-brand'>Cards</Link>);
		} else {
			return (<Link to='/' className='navbar-brand'>Cards</Link>);
		}
	}

	render() {
		return (
			<nav className='navbar navbar-light'>
				{this.renderLogo()}
				<ul className='nav navbar-nav'>
					{this.renderLinks()}
				</ul>
			</nav>
		);
	}
}

function mapStateToProps(state) {
	return {
		authenticated: state.auth.authenticated
	};
}

export default connect(mapStateToProps, actions)(Header);