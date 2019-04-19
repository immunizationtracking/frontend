import React, { Component } from "react";
import { connect } from "react-redux";
import { logUserIn } from "../actions";
import { withRouter } from "react-router-dom";
import "./log.css";
import { Link } from "react-router-dom";
import { Form } from "formsy-semantic-ui-react";

import { Message, Label } from "semantic-ui-react";

const errorLabel = <Label color='yellow' pointing='above' />;

class Logbox extends Component {
	onValidSubmit = FormData => this.handleSubmit(FormData);
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
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.logUserIn(this.state.user).then(() => {
			setTimeout(() => {
				this.props.history.push("/users/");
			}, 1600);
		});
		this.setState({
			user: {
				username: "",
				password: ""
			}
		});
	};

	render() {
		const logStatus = this.props.wasLoginGood;
		return (
			<div>
				<Form
					success={logStatus === true}
					error={logStatus === false}
					onValidSubmit={this.onValidSubmit}
				>
					<p>Please use your Username and Password to Log in.</p>
					<div className='log-body'>
						<div className='inputs'>
							<Form.Input
								onChange={this.handleInputChange}
								value={this.state.user.username}
								label='Enter Userame:'
								placeholder='Username'
								type='text'
								name='username'
								required
								validationErrors={{
									isDefaultRequiredValue: "A  username is required"
								}}
								errorLabel={errorLabel}
							/>
							<Form.Input
								onChange={this.handleInputChange}
								value={this.state.user.password}
								label='Enter Password:'
								placeholder='Password'
								type='password'
								name='password'
								required
								icon='lock'
								validationErrors={{
									isDefaultRequiredValue: "Password is required"
								}}
								errorLabel={errorLabel}
							/>
						</div>
					</div>

					<Form.Button onClick={this.handleSubmit}>Log In</Form.Button>
					<Message
						success
						header='Registration Success'
						content={`${this.props.logSuccessMsg}`}
					/>
					<Message
						error
						header='Registration Error'
						content={`${this.props.logFailMsg}`}
					/>
				</Form>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	isLoggingIn: state.isLoggingIn,
	logFailMsg: state.logFailMsg,
	logSuccessMsg: state.logSuccessMsg,
	wasLoginGood: state.wasLoginGood
});

export default connect(
	mapStateToProps,
	{ logUserIn }
)(withRouter(Logbox));
