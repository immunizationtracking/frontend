import React, { Component } from "react";
import "./header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <p className="logo">Logo</p>
        <p>Immunotracker</p>
        <div className="link">
          <a href="#">Log In</a>
          <a href="#">Sign Up</a>
        </div>
      </div>
    );
  }
}
