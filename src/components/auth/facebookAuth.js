import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class FacebookAuth extends Component {
	componentWillMount() {
		const { match: { params }, history } = this.props;
		this.props.facebookSignin(params.token, history)
	}

	render() {
		return (
			<div>Authenticating....</div>
		);
	}
}

export default connect(null, actions)(FacebookAuth);