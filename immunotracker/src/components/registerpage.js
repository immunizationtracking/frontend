import React, { Component } from "react";
import "./login.css";
import Logbox from "./LoginComp";
import Register from "./register/register";

export default class Regi extends Component {
  render() {
    return (
      <div>
        <div className="top-content">
          <div className="logsub-box">Large Logo</div>
          <div className="logsub-box">
            <Register />
          </div>
        </div>
        <div className="bottom-content">
          Loved by doctors, keep track of stuff yadayadayada
        </div>
      </div>
    );
  }
}
