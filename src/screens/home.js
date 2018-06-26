import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Home extends Component {
	componentWillMount() {
		this.props.fetchMessage();
	}

	render() {
		return (
			<div>
				<div>This is the home screen</div>
				<div>{this.props.message}</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { message: state.auth.message };
}

export default connect(mapStateToProps, actions)(Home);