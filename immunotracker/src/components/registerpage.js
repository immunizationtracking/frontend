import React, { Component } from "react";
import "./login.css";
import Logbox from "./LoginComp";
import Register from "./register/register";
import largelogo from "../img/largeicon.png";
export default class Regi extends Component {
  render() {
    return (
      <div>
        <div className="top-content">
          <img src={largelogo} className="llogo" />
          <div className="logsub-box">
            <Register />
          </div>
        </div>
        <div className="bottom-content">
          <h2>It's Never Too Late To Start Tracking Your Health</h2>
        </div>
      </div>
    );
  }
}
