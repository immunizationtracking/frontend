import React, { Component } from "react";
import "./footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <p className="Info">Company Info</p>

        <div className="link">
          <a href="#">Contact Us</a>
        </div>
      </div>
    );
  }
}
