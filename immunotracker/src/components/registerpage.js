import React, { Component } from "react";
import "./login.css";
import Logbox from "./LoginComp";
import Register from "./register/register";
import largelogo from "../img/largeicon.png";
export default class Regi extends Component {
  render() {
    return (
      <div>
        <Register />
      </div>
    );
  }
}
