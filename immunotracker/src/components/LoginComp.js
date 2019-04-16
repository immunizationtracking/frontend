import React, { Component } from "react";
import { connect } from "react-redux";
import { logUserIn } from "../actions";
import "./log.css";

class Logbox extends Component {
	constructor() {
		super();
		this.state = {
			user: {
				username: "",
				password: ""
			}
		};
	}
	handleInputChange = e => {
		this.setState({
			user: { ...this.state.user, [e.target.name]: e.target.value }
		});
		console.log(this.state.user);
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.logUserIn(this.state.user);
		console.log(this.state.user);
		this.setState({
			user: {
				username: "",
				password: ""
			}
		});
	};

	render() {
		return (
			<div>
				<div className='log-body'>
					<div className='log-text'>
						<strong>Username:</strong>
						<strong>Password:</strong>
					</div>
					<div className='inputs'>
						<input
							onChange={this.handleInputChange}
							value={this.state.user.username}
							name='username'
						/>
						<input
							onChange={this.handleInputChange}
							value={this.state.user.password}
							name='password'
						/>
					</div>
				</div>
				<button onClick={this.handleSubmit}>Log In</button>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	isLoggingIn: state.isLoggingIn
});

export default connect(
	mapStateToProps,
	{ logUserIn }
)(Logbox);
