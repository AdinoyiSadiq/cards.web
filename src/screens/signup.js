import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import formInput from '../components/forms/formInput';
import { connect } from 'react-redux';
import * as actions from '../actions';
import cardImg from '../img/card.svg'

class Signup extends Component {
	handleFormSubmit(formProps) {
		// Call action creator to sign up the user
		const { history } = this.props;
		this.props.signupUser(formProps, history)
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
		const { handleSubmit } = this.props;

		return (
			<div>
				<div className='vertical-center'>
					<div className="container col-md-8" >
						<div className="row">
							<div className="col-sm">
								<img src={cardImg} />
							</div>
							<div className="col-sm">
								<div className='align-bottom mt-5'>
									<h3>Get your Cards account now</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
									<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
										<fieldset className='form-group'>
											<Field name='email'
												placeholder='email'
												type='text'
												component={formInput} />
										</fieldset>
										<fieldset className='form-group'>
											<Field name='password'
												placeholder='password'
												type='password'
												component={formInput} />
										</fieldset>
										<fieldset className='form-group'>
											<Field name='passwordConfirm'
												placeholder='confirm password'
												type='password'
												component={formInput} />
										</fieldset>
										{this.renderAlert()}
										<button action='submit' className='btn btn-primary'>
											Sign up
					</button>
										<span className="or">or</span>
										<a href='http://localhost:3090/auth/facebook'
											className='btn btn-primary'>
											Facebook signup
									</a>
									</form>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

function validate(formProps) {
	const errors = {};

	if (!formProps.email) {
		errors.email = 'Please enter an email';
	}

	if (!formProps.password) {
		errors.password = 'Please enter a password';
	}

	if (!formProps.passwordConfirm) {
		errors.passwordConfirm = 'Please enter a password confirmation';
	}

	if (formProps.password !== formProps.passwordConfirm) {
		errors.password = 'Passwords must match';
	}

	return errors;
}

Signup = reduxForm({
	form: 'signup',
	validate: validate
})(Signup);

function mapStateToProps(state) {
	return { errorMessage: state.auth.error }
}

export default connect(mapStateToProps, actions)(Signup);