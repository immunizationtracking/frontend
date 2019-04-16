import React, { Component } from "react";
import "./header.css";
import small from "./small.png";

export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <img src={small} className="logo" width="60" height="60" />

        <p>Immunotracker</p>
        <div className="link">
          <a href="/">Log In</a>
          <a href="/register">Sign Up</a>
        </div>
      </div>
    );
  }
}
