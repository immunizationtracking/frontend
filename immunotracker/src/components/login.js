import React, { Component } from "react";
import "./login.css";
import Logbox from "./LoginComp";
import largelogo from "../img/largeicon.png";

class Login extends Component {
	render() {
		return (
			<div>
				<div className='top-content'>
					<img src={largelogo} className='loglogo' />
					<div className='logsub-box'>
						<Logbox />
					</div>
				</div>
				<div className='bottom-content'>
					Loved by doctors, keep track of stuff yadayadayada
				</div>
			</div>
		);
	}
}
export default Login;
