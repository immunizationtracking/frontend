import React, { Component } from "react";
import "./login.css";

export default class login extends Component {
  render() {
    return (
      <div>
        <div className="top-content">
          <div>Large Logo</div>
          <div className="logsub-box">
            Login/Submit(Put in another route to which)
          </div>
        </div>
        <div className="bottom-content">
          Loved by doctors, keep track of stuff yadayadayada
        </div>
      </div>
    );
  }
}
