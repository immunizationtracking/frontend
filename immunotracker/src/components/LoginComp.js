import React, { Component } from "react";
import "./log.css";

export default class Logbox extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }
  handleInputChangeU = e => {
    this.setState({ username: e.target.value });
  };
  handleInputChangeP = e => {
    this.setState({ password: e.target.value });
  };
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
              onChange={this.handleInputChangeU}
              value={this.state.username}
            />
            <input
              onChange={this.handleInputChangeP}
              value={this.state.password}
            />
          </div>
        </div>
        <button>Log In</button>
      </div>
    );
  }
}
