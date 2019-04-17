import React, { Component } from "react";
import { connect } from "react-redux";
import { registerNewUser } from "../../actions";
// import Formsy from "formsy-react";
// import { Form, Button, Dropdown, Message } from "semantic-ui-react";

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

import { Message, Label } from "semantic-ui-react";

const roleOptions = [
	{
		key: "Patient",
		text: "Patient",
		value: "Patient"
	},
	{
		key: "Practitioner",
		text: "Practitioner",
		value: "Practitioner"
	}
];

const errorLabel = <Label color='yellow' pointing='above' />;

class Register extends Component {
	onValidSubmit = FormData => this.handleSubmit(FormData);
	constructor(props) {
		super(props);
		this.state = {
			newUser: {
				id: Date.now,
				username: "",
				password: "",
				firstName: "",
				lastName: "",
				email: "",
				role: ""
			}
		};
	}

	handleInput = e => {
		this.setState({
			newUser: { ...this.state.newUser, [e.target.name]: e.target.value }
		});
	};

	handleDropChange = (e, { value }) =>
		this.setState({
			newUser: { ...this.state.newUser, role: value }
		});

	handleSubmit = () => {
		this.props.registerNewUser(this.state.newUser);
		console.log(this.state.newUser);
		// this.setState({
		// 	newUser: {
		// 		...this.state.newUser,
		// 		first: "",
		// 		last: "",
		// 		username: "",
		// 		password: "",
		// 		email: "",
		// 		role: ""
		// 	}
		// });
	};

	render() {
		const registerStatus = this.props.wasRegisterSuccesful;

		return (
			<div className='registerField1'>
				<Form
					success={registerStatus === true}
					error={registerStatus === false}
					// onSubmit={this.handleSubmit}
					onValidSubmit={this.onValidSubmit}
				>
					<Form.Input
						onChange={this.handleInput}
						label='Enter First Name:'
						placeholder='First Name'
						type='text'
						name='firstName'
						value={this.state.newUser.firstName}
						required
						validationErrors={{
							isDefaultRequiredValue: "A first name is required"
						}}
						errorLabel={errorLabel}
					/>
					<Form.Input
						onChange={this.handleInput}
						label='Enter Last Name:'
						placeholder='Last Name'
						type='text'
						name='lastName'
						value={this.state.newUser.lastName}
						required
						validationErrors={{
							isDefaultRequiredValue: "A last name is required"
						}}
						errorLabel={errorLabel}
					/>
					<Form.Input
						onChange={this.handleInput}
						label='Enter Userame:'
						placeholder='Username'
						type='text'
						name='username'
						value={this.state.newUser.username}
						required
						validationErrors={{
							isDefaultRequiredValue: "A  username is required"
						}}
						errorLabel={errorLabel}
					/>
					<Form.Input
						onChange={this.handleInput}
						label='Enter Password:'
						placeholder='Password'
						type='password'
						name='password'
						value={this.state.newUser.password}
						required
						icon='lock'
						validations='minLength:6'
						validationErrors={{
							minLength:
								"Password length must be a minimum of 6 characters long",
							isDefaultRequiredValue: "Password is required"
						}}
						errorLabel={errorLabel}
					/>
					<Form.Input
						onChange={this.handleInput}
						icon='mail'
						validations='isEmail'
						validationErrors={{
							isEmail: "You must enter a valid Email address",
							isDefaultRequiredValue: "An Email address is required"
						}}
						errorLabel={errorLabel}
						label='Enter Email:'
						placeholder='Email'
						type='email'
						name='email'
						value={this.state.newUser.email}
						required
					/>
					<Form.Dropdown
						onChange={this.handleDropChange}
						name='role'
						placeholder='Select Role'
						label='Select a User Type'
						selection
						required
						validationErrors={{
							isDefaultRequiredValue: "You need to select a role"
						}}
						errorLabel={errorLabel}
						options={roleOptions}
					/>
					<Form.Button
					// onClick={this.handleSubmit}
					// onValidSubmit={() => this.onValidSubmit}
					>
						Register
					</Form.Button>
					<Message
						success
						header='Registration Success'
						content={`${this.props.registerSuccessMsg}`}
					/>
					<Message
						error
						header='Registration Error'
						content={`${this.props.registerErrMsg}`}
					/>{" "}
				</Form>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		isRegistered: state.isRegistered,
		isRegistering: state.isRegistering,
		wasRegisterSuccesful: state.wasRegisterSuccesful,
		registerErrMsg: state.registerErrMsg,
		registerSuccessMsg: state.registerSuccessMsg
	};
};

export default connect(
	mapStateToProps,
	{ registerNewUser }
)(Register);
