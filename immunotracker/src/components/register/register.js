import React, { Component } from "react";

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
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
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
        <div className="log-body">
          <div className="log-text">
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
          <div className="inputs">
            <input onChange={this.handleInputChange} value={this.state.first} />
            <input onChange={this.handleInputChange} value={this.state.last} />
            <input
              onChange={this.handleInputChange}
              value={this.state.username}
            />
            <input
              onChange={this.handleInputChange}
              value={this.state.password}
            />
            <input onChange={this.handleInputChange} value={this.state.email} />
          </div>
        </div>
        <button>Log In</button>
      </div>
    );
  }
}
