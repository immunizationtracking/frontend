import React, { Component } from "react";
import "./regcss.css";
export default class Register extends Component {
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

  truedoc = () => {
    this.setState({ role: true });
  };
  notdoc = () => {
    this.setState({ role: false });
  };
  render() {
    return (
      <div>
        <p>Submission Form</p>
        <div className="log-body">
          <div className="log-text">
            <strong>First Name:</strong>
            <strong>Last Name:</strong>
            <strong>Username:</strong>
            <strong>Password:</strong>
            <strong>Email:</strong>
            <div className="role">
              <strong>Role:</strong>
              <button onClick={this.truedoc}>Doctor</button>
              <button onClick={this.notdoc}>Patient</button>
            </div>
          </div>
          <div className="inputs">
            <input
              onChange={this.handleInput}
              value={this.state.first}
              name="first"
            />
            <input
              onChange={this.handleInput}
              value={this.state.last}
              name="last"
            />
            <input
              onChange={this.handleInput}
              value={this.state.username}
              name="username"
            />
            <input
              onChange={this.handleInput}
              value={this.state.password}
              name="password"
            />
            <input
              onChange={this.handleInput}
              value={this.state.email}
              name="email"
            />
          </div>
        </div>
        <button>Log In</button>
      </div>
    );
  }
}
