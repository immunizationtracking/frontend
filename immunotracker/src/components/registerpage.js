import React, { Component } from "react";
import "./login.css";
import Logbox from "./LoginComp";
import Register from "./register/register.js";
import largelogo from "../img/largeicon.png";

// export default class Regi extends Component {
//   render() {
//     return (
//       <div>
//         <Register />
//       </div>
//     );
//   }
// }

class RegisterPage extends Component {
  render() {
    return (
      <div>
        <Register />
      </div>
    );
  }
}

export default RegisterPage;
