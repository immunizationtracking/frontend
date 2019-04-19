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
	refreshPatients
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
			patients: []
		};
	}

	componentDidMount() {
		this.props.loadPatients(token);
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

	// addpatient = id => {
	// 	const token = withAuth();
	// 	console.log(token);

	// 	console.log("this is token:", withAuth());
	// 	axios
	// 		.post(
	// 			`https://immunization-tracker.herokuapp.com/api/patients`,
	// 			this.state.newuser,
	// 			token
	// 		)
	// 		.then(res => {
	// 			this.setState({ patients: res.data });
	// 		})
	// 		.catch(error => console.log(error));
	// };
	selected = name => {
		this.state.patients.map(patient => {
			if (name === patient.name) {
				this.setState({
					...this.state.patients,
					[this.state.patients.selected]: !patient.selected
				});

				patient.selected = !patient.selected;
			}
		});
	};
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
				<div>
					{this.props.needsRefresh ? this.props.refreshPatients(token) : null}

					{/* {this.props.patientsLoaded */}
					{this.props.patients.length > 0
						? this.props.patients.map(patient => {
								return (
									<div>
										<MinCard
											key={patient.name}
											id={patient.id}
											patient={patient}
											selected={() => this.selected}
											removePatient={this.removePatient}
										/>
									</div>
								);
						  })
						: null}
				</div>
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
		needsRefresh: state.needsRefresh
	};
};

export default connect(
	mapStateToProps,
	{ addPatient, loadPatients, removePatient, refreshPatients }
)(cardview);
