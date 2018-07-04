import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import nana from '../img/nana.png'
import john from '../img/john.png'
import joe from '../img/joe.png'
import sarah from '../img/sarah.png'
import jay from '../img/jay.png'
import choco from '../img/choco.jpg'
import kano from '../img/kano.jpg'
import shawarma from '../img/shawarma.jpg'
import tee from '../img/tee.jpg'
import sugar from '../img/sugar.png'

class Home extends Component {
	componentWillMount() {
		this.props.fetchMessage();
	}

	render() {
		return (
			<div className='container'>
				<div className="container container-small col-md-7" >
					<Form>
						<FormGroup>
							<Input type='email' name='search' placeholder="search, explore and  connect with people and businesses" />
						</FormGroup>
					</Form>
				</div>
				<div className="container container-small col-md-9">
					<div className=" shadow p-2 mb-5 bg-white rounded">
						<div className="row">
							<Button color='secondary' className="m-4 col-sm">People</Button>
							<Button color='secondary' className="m-4 col-sm">Company</Button>
							<Button color='secondary' className="m-4 col-sm">Products</Button>
							<Button color='secondary' className="m-4 col-sm">Services</Button>
							<Button color='secondary' className="m-4 col-sm">Events</Button>
						</div>
					</div>
				</div>
				<div className='container mb-5'>
					<h3>People</h3>
					<div className="row">
						<div className="col-sm ">
							<div className=" shadow text-white">
								<img className="card-img" src={nana} alt="Card image" />
								<div className="card-img-overlay  h-100 d-flex flex-column justify-content-end" style={{ padding: '0.9rem 0.9rem 0 0.9rem' }}>
									<div className='card-gradient   green-border'>
										<h6 className=" m-0">Nana Sowore</h6>
										<p className="m-0 font-weight-light description-text">Florist, Herbal Enthusiast</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm ">
							<div className=" shadow text-white">
								<img className="card-img" src={john} alt="Card image" />
								<div className="card-img-overlay  h-100 d-flex flex-column justify-content-end" style={{ padding: '0.9rem 0.9rem 0 0.9rem' }}>
									<div className='card-gradient  green-border'>
										<h6 className=" m-0">Obi Nnamdi</h6>
										<p className="m-0 font-weight-light description-text">CTO Digican</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm ">
							<div className=" shadow text-white">
								<img className="card-img" src={joe} alt="Card image" />
								<div className="card-img-overlay  h-100 d-flex flex-column justify-content-end" style={{ padding: '0.9rem 0.9rem 0 0.9rem' }}>
									<div className='card-gradient  green-border'>
										<h6 className=" m-0">Dr. Doe James</h6>
										<p className="m-0 font-weight-light description-text">Educator, Academician</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm ">
							<div className=" shadow text-white">
								<img className="card-img" src={sarah} alt="Card image" />
								<div className="card-img-overlay  h-100 d-flex flex-column justify-content-end" style={{ padding: '0.9rem 0.9rem 0 0.9rem' }}>
									<div className='card-gradient  green-border'>
										<h6 className=" m-0">Sarah Sowore</h6>
										<p className="m-0 font-weight-light description-text">Florist, Herbal Enthusiast</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm ">
							<div className=" shadow text-white">
								<img className="card-img" src={jay} alt="Card image" />
								<div className="card-img-overlay  h-100 d-flex flex-column justify-content-end" style={{ padding: '0.9rem 0.9rem 0 0.9rem' }}>
									<div className='card-gradient  green-border'>
										<h6 className=" m-0">Jay  Adams</h6>
										<p className="m-0 font-weight-light description-text">Developer</p>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
				<div className='container'>
					<h3>Products</h3>
					<div className="row">
						<div className="col-sm ">
							<div className=" shadow text-white">
								<img className="card-img" src={choco} alt="Card image" />
								<div className="card-img-overlay  h-100 d-flex flex-column justify-content-end" style={{ padding: '0.9rem 0.9rem 0 0.9rem' }}>
									<div className='card-gradient'>
										<div className='row'>
											<div className='col-sm-9'>
												<h6 className=" m-0">Early bites</h6>
											</div>
											<div className='col-sm-3'>
												♡
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm ">
							<div className=" shadow text-white">
								<img className="card-img" src={kano} alt="Card image" />
								<div className="card-img-overlay  h-100 d-flex flex-column justify-content-end" style={{ padding: '0.9rem 0.9rem 0 0.9rem' }}>
									<div className='card-gradient'>
										<div className='row'>
											<div className='col-sm-9'>
												<h6 className=" m-0">Explore Kano</h6>
											</div>
											<div className='col-sm-3'>
												♡
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm ">
							<div className=" shadow text-white">
								<img className="card-img" src={shawarma} alt="Card image" />
								<div className="card-img-overlay  h-100 d-flex flex-column justify-content-end" style={{ padding: '0.9rem 0.9rem 0 0.9rem' }}>
									<div className='card-gradient'>
										<div className='row'>
											<div className='col-sm-9'>
												<h6 className=" m-0">Shawarma</h6>
											</div>
											<div className='col-sm-3'>
												♡
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm ">
							<div className=" shadow text-white">
								<img className="card-img" src={tee} alt="Card image" />
								<div className="card-img-overlay  h-100 d-flex flex-column justify-content-end" style={{ padding: '0.9rem 0.9rem 0 0.9rem' }}>
									<div className='card-gradient'>
										<div className='row'>
											<div className='col-sm-9'>
												<h6 className=" m-0">Nerdy T Shirts</h6>
											</div>
											<div className='col-sm-3'>
												♡
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm ">
							<div className=" shadow text-white">
								<img className="card-img" src={sugar} alt="Card image" />
								<div className="card-img-overlay  h-100 d-flex flex-column justify-content-end" style={{ padding: '0.9rem 0.9rem 0 0.9rem' }}>
									<div className='card-gradient'>
										<div className='row'>
											<div className='col-sm-9'>
												<h6 className=" m-0">Sugar Treats</h6>
											</div>
											<div className='col-sm-3'>
												♡
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						
					</div>
				</div>

			</div>
		);
	}
}

function mapStateToProps(state) {
	return { message: state.auth.message };
}

export default connect(mapStateToProps, actions)(Home);