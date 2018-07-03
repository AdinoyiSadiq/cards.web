import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import formInput from '../components/forms/formInput';
import { connect } from 'react-redux';
import * as actions from '../actions';
import cardImg from '../img/card.svg'

class Signin extends Component {
	handleFormSubmit({ email, password }) {
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
		const { handleSubmit } = this.props;

		return (
			<div className='vertical-center'>
				<div className="container col-md-8" >
					<div className="row">
						<div className="col-sm">
							<img src={cardImg} />
						</div>
						<div className="col-sm">
							<div className='align-bottom mt-5'>
								<h1>Cards</h1>
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
									{this.renderAlert()}
									<button action='submit' className='btn btn-primary'>
										Sign in
					</button>
									<span className="or">or</span>
									<a href='http://localhost:3090/auth/facebook'
										className='btn btn-primary'>
										Facebook login
				</a>
								</form>
							</div>
						</div>
					</div>
				</div>


			</div>

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