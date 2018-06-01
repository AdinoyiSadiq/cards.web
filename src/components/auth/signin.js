import React, { Component } from 'react';
import {reduxForm, Field} from 'redux-form';
import formInput from '../forms/formInput';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signin extends Component {
	handleFormSubmit({email, password}) {
		const { history } = this.props;
		this.props.signinUser({ email, password }, history);
	}

	renderAlert() {
		if (this.props.errorMessage) {
			return (
				<div className='alert alert-danger'>
					<strong>Oops!</strong> {this.props.errorMessage}
				</div>
			);
		}
	}

	render() {
		const {handleSubmit} = this.props;

		return (
			<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
				<fieldset className='form-group'>
					<label>Email:</label>
					<Field name='email'
						   placeholder='email'
						   type='text'
	                       component={formInput}/>
				</fieldset>
				<fieldset className='form-group'>
					<label>Password:</label>
					<Field name='password'
						   placeholder='password'
						   type='password'
	                       component={formInput}/>
				</fieldset>
				{this.renderAlert()}
				<button action='submit' className='btn btn-primary'>
					Sign in
				</button>
			</form>
		);
	}
}

Signin = reduxForm({
    form: 'signin'
})(Signin);

function mapStateToProps(state) {
	return { errorMessage: state.auth.error };
}

export default connect(mapStateToProps, actions)(Signin);