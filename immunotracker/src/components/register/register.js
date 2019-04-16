import React, { Component } from "react";
import { connect } from "react-redux";
import { registerNewUser } from "../../actions";

class Register extends Component {
	constructor() {
		super();
		this.state = {
			newuser: {
				first: "",
				last: "",
				username: "",
				password: "",
				email: "",
				role: false
			}
		};
	}
	handleInput = e => {
		this.setState({
			newuser: { ...this.state.newuser, [e.target.name]: e.target.value }
		});
	};
	//   handleInputChangeL = e => {
	//     this.setState({ last: e.target.value });
	//   };
	//   handleInputChangeU = e => {
	//     this.setState({ username: e.target.value });
	//   };
	//   handleInputChangeP = e => {
	//     this.setState({ password: e.target.value });
	//   };
	//   handleInputChangeE = e => {
	//     this.setState({ email: e.target.value });
	//   };

	handleSubmit = e => {
		e.preventDefault();
		this.props.registerNewUser(this.state.newuser);
		console.log(this.state.newuser);
	};

	truedoc = () => {
		this.setState({ role: true });
	};
	notdoc = () => {
		this.setState({ role: false });
	};
	render() {
		return (
			<div>
				<div className='log-body'>
					<div className='log-text'>
						<strong>First Name:</strong>
						<strong>Last Name:</strong>
						<strong>Username:</strong>
						<strong>Password:</strong>
						<strong>Email:</strong>
						<div>
							<strong>Role:</strong>
							<button onClick={this.truedoc}>Doctor</button>
							<button onClick={this.notdoc}>Patient</button>
						</div>
					</div>
					<div className='inputs'>
						<input
							onChange={this.handleInput}
							value={this.state.first}
							name='first'
						/>
						<input
							onChange={this.handleInput}
							value={this.state.last}
							name='last'
						/>
						<input
							onChange={this.handleInput}
							value={this.state.username}
							name='username'
						/>
						<input
							onChange={this.handleInput}
							value={this.state.password}
							name='password'
						/>
						<input
							onChange={this.handleInput}
							value={this.state.email}
							name='email'
						/>
					</div>
				</div>
				<button onClick={this.handleSubmit}>Log In</button>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	isRegistered: state.isRegistered,
	isRegistering: state.isRegistering,
	wasRegisterSuccesful: state.wasRegisterSuccesful,
	registerErrMsg: state.registerErrMsg,
	registerSuccessMsg: state.registerSuccessMsg
});

export default connect(
	mapStateToProps,
	{ registerNewUser }
)(Register);
