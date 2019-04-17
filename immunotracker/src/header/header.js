import React, { Component } from "react";
import "./header.css";
import banner from "../img/Banner.png";

export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <img src={banner} className="logo" />

        <div className="link">
          <a href="/">Log In</a>
          <a href="/register">Sign Up</a>
        </div>
      </div>
    );
  }
}
