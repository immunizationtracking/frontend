import React, { Component } from "react";
import "./log.css";

export default class Logbox extends Component {
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
  //   handleInputChangeP = e => {
  //     this.setState({ password: e.target.value });
  //   };
  render() {
    return (
      <div>
        <div className="log-body">
          <div className="log-text">
            <strong>Username:</strong>
            <strong>Password:</strong>
          </div>
          <div className="inputs">
            <input
              onChange={this.handleInputChange}
              value={this.state.username}
              name="username"
            />
            <input
              onChange={this.handleInputChange}
              value={this.state.password}
              name="password"
            />
          </div>
        </div>
        <button>Log In</button>
      </div>
    );
  }
}
