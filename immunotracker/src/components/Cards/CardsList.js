import React from "react";
import MinCard from "./mincard";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Maxcard from "./maxcard";
import axios from "axios";
import withAuth from "../../utils/withAuth";
import { connect } from "react-redux";
import {
	loadPatients,
	addPatient,
	removePatient,
	refreshPatients,
	getVaccs,
	getDocs,
	addVaccs
} from "../../actions";
import {
	Form,
	Input,
	TextArea,
	Checkbox,
	Radio,
	RadioGroup,
	Dropdown,
	Select
} from "formsy-semantic-ui-react";
import "./cardlistcss.css";
const token = withAuth();
class cardview extends React.Component {
	constructor() {
		super();
		this.state = {
			newuser: {
				firstName: "",
				lastName: "",
				gender: "",
				dateOfBirth: "",

				patientUserId: 1
			},
			patients: "",
			vaccine: {
				immunizationName: "SuperCure",
				dateReceived: "01-01-1990 ",
				placeReceived: "SuperDoctorJr ",
				givenBy: "Dr.SuperDoc",
				nextShotDue: "01-02-2020",
				doseInfo: "30cc",
				doseNumber: "2",
				hasAccess: false,
				patientInfo_id: 1,
				practitioner_id: 1
			}
		};
	}

	componentDidMount() {
		this.props.loadPatients(token);
		this.props.getDocs(token);
		const vaccine = this.state.vaccine;
		const practicioner_id = 1;
		this.props.addVaccs(vaccine, practicioner_id);
	}

	checkRoleFuncs = {};

	addPatient = () => {
		this.props.addPatient(this.state.newuser, token);
		this.setState({
			...this.state.newuser,
			name: "",
			lastName: "",
			gender: "",
			dateOfBirth: ""
		});
	};

	removePatient = id => {
		const token = withAuth();
		console.log("FROM RM CARDSLIST", id);
		this.props.removePatient(id, token);
	};

	getVaccs = id => {
		const token = withAuth();
		this.props.getVaccs(token);
	};

	// getDocs = () => {
	// 	const token = withAuth();
	// 	this.props.getDocs(token);
	// };
	// selected = id => {
	// 	console.log("selected!", id);

	// 	<Route
	// 		path='/users/:id'
	// 		render={() => {
	// 			return <Maxcard patient={patient} />;
	// 		}}
	// 	/>;
	// 	// this.state.patients.map(patient => {
	// 	// 	if (id === patient.id) {
	// 	// 		this.setState({
	// 	// 			...this.state.patients,
	// 	// 			[this.state.patients.selected]: !patient.selected
	// 	// 		});

	// 	// 		patient.selected = !patient.selected;
	// 	// 	}
	// 	// });
	// };
	handleInputChange = e => {
		this.setState({
			...this.state,
			newuser: { ...this.state.newuser, [e.target.name]: e.target.value }
		});
		console.log(this.state.newuser);
	};
	render() {
		console.log();
		return (
			<div>
				<Switch>
					<Route
						path='/users/:id'
						render={props => {
							return (
								<Maxcard
									props={props}
									getVaccs={this.getVaccs}
									vaccines={this.props.vaccines}
								/>
							);
						}}
					/>
					<div>
						<Form className='addpatientform'>
							<Form.Input
								onChange={this.handleInputChange}
								value={this.state.newuser.firstName}
								name='firstName'
								label='first name'
							/>
							<Form.Input
								onChange={this.handleInputChange}
								value={this.state.newuser.lastName}
								name='lastName'
								label='lastname'
							/>
							<Form.Input
								onChange={this.handleInputChange}
								value={this.state.newuser.gender}
								name='gender'
								label='gender'
							/>
							<Form.Input
								onChange={this.handleInputChange}
								value={this.state.newuser.dateOfBirth}
								name='dateOfBirth'
								label='DOB'
								type='date'
							/>
							<button onClick={this.addPatient}>add</button>
						</Form>
						{this.props.needsRefresh ? this.props.refreshPatients(token) : null}

						{/* {this.props.patientsLoaded */}
						{this.props.patients.length > 0
							? this.props.patients.map(patient => {
									return (
										<div>
											<Route
												path='/users/'
												render={() => {
													return (
														<>
															<MinCard
																key={patient.id}
																// selected={this.selected}
																removePatient={this.removePatient}
																patient={patient}
																vaccines={this.props.vaccines}
															/>
														</>
													);
												}}
											/>

											{/* <MinCard
											key={patient.name}
											id={patient.id}
											patient={patient}
											// selected={this.selected}
											removePatient={this.removePatient}
										/> */}
										</div>
									);
							  })
							: null}
					</div>
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		patients: state.patients,
		patientsLoaded: state.patientsLoaded,
		addingPatient: state.addingPatient,
		addingPatientFinished: state.addingPatientFinished,
		needsRefresh: state.needsRefresh,
		vaccines: state.vaccines
	};
};

export default connect(
	mapStateToProps,
	{
		addPatient,
		loadPatients,
		removePatient,
		refreshPatients,
		getVaccs,
		getDocs,
		addVaccs
	}
)(cardview);
