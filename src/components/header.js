import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions';

class Header extends Component {
	renderLinks() {
		if (this.props.authenticated) {
			return (
				<Nav>
					<NavItem>
						<div className='nav-link' onClick={() => this.props.signoutUser()}>
							Sign Out
						</div>
					</NavItem>
					<NavItem>
						<Link className='nav-link' to='/messages'>Messages</Link>
					</NavItem>
					<NavItem>
						<Link className='nav-link' to='/saved'>Saved</Link>
					</NavItem>
					<NavItem>
						<Link className='nav-link' to='/profile'>Profile</Link>
					</NavItem>
				</Nav>
			);
		} else {
			return (
				<Nav>
					<NavItem>
						<Link className='nav-link' to='/signin'>Sign In</Link>
					</NavItem>
					<NavItem>
						<Link className='nav-link' to='/signup'>Sign Up</Link>
					</NavItem>
				</Nav>
			);
			
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
			<div>
				<Navbar>
					{this.renderLogo()}
					{this.renderLinks()}
				</Navbar>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		authenticated: state.auth.authenticated
	};
}

export default connect(mapStateToProps, actions)(Header);