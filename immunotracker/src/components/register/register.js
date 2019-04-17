import React, { Component } from "react";
import { connect } from "react-redux";
import { registerNewUser } from "../../actions";

import { Form, Button, Dropdown, Message } from "semantic-ui-react";

const roleOptions = [
  {
    key: 1,
    text: "User",
    value: false
  },
  {
    key: 2,
    text: "Medical Institution",
    value: true
  }
];

class Register extends Component {
  constructor() {
    super();
    this.state = {
      newUser: {
        first: "",
        last: "",
        username: "",
        password: "",
        email: "",
        role: null
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

  handleSubmit = e => {
    e.preventDefault();
    this.props.registerNewUser(this.state.newUser);
    console.log(this.state.newUser);
    this.setState({
      newUser: {
        ...this.state.newUser,
        first: "",
        last: "",
        username: "",
        password: "",
        email: "",
        role: ""
      }
    });
  };

	render() {
		const registerStatus = this.props.wasRegisterSuccesful;

    return (
      <div className="registerField1">
        <Form
          success={registerStatus === true}
          error={registerStatus === false}
          onSubmit={this.handleSubmit}
        >
          <Form.Input
            onChange={this.handleInput}
            label="Enter First Name:"
            placeholder="First Name"
            type="text"
            name="first"
            value={this.state.newUser.first}
          />
          <Form.Input
            onChange={this.handleInput}
            label="Enter Last Name:"
            placeholder="Last Name"
            type="text"
            name="last"
            value={this.state.newUser.last}
          />
          <Form.Input
            onChange={this.handleInput}
            label="Enter Userame:"
            placeholder="Username"
            type="text"
            name="username"
            value={this.state.newUser.username}
          />
          <Form.Input
            onChange={this.handleInput}
            label="Enter Password:"
            placeholder="Password"
            type="password"
            name="password"
            value={this.state.newUser.password}
          />
          <Form.Input
            onChange={this.handleInput}
            label="Enter Email:"
            placeholder="Email"
            type="email"
            name="email"
            value={this.state.newUser.email}
          />
          <Dropdown
            onChange={this.handleDropChange}
            name="role"
            placeholder="Select Role"
            fluid
            selection
            options={roleOptions}
          />
          <Button onClick={this.handleSubmit}>Register</Button>
          <Message
            success
            header="Registration Success"
            content={`${this.props.registerSuccessMsg}`}
          />
          <Message
            error
            header="Registration Error"
            content={`${this.props.registerErrMsg}`}
          />
        </Form>
        {/* <div className='log-body'>
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
				</div> */}
        {/* <button onClick={this.handleSubmit}>Log In</button> */}
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
