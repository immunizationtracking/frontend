import React, { Component } from "react";
import { connect } from "react-redux";
import { logUserIn } from "../actions";
import "./log.css";
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
      <Form>
        <p>Please use your Username and Password to Log in.</p>
        <div className="log-body">
          <div className="inputs">
            <Form.Input
              onChange={this.handleInputChange}
              value={this.state.user.username}
              name="username"
              label="Enter Username"
            />
            <Form.Input
              onChange={this.handleInputChange}
              value={this.state.user.password}
              name="password"
              type="password"
              label="Enter Password"
            />
          </div>
        </div>
        <Form.Button onClick={this.handleSubmit}>Log In</Form.Button>
      </Form>
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
