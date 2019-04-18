import React, { Component } from "react";
import "./header.css";
import banner from "../img/Banner.png";
import { connect } from "react-redux";
import { logUserOut } from "../actions";

class Header extends Component {
	constructor() {
		super();
	}

	logOut = e => {
		this.props.logUserOut();
	};

	render() {
		return (
			<div className='Header'>
				<img src={banner} className='logo' />

				<div className='link'>
					{this.props.isLoggedIn ? (
						<a onClick={this.logOut} href='/'>
							Log Out
						</a>
					) : (
						<a href='/'>Log In</a>
					)}
					<a href='/register'>Sign Up</a>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		isLoggedIn: state.isLoggedIn,
		isLoggedOut: state.isLoggedOut
	};
};

export default connect(
	mapStateToProps,
	{ logUserOut }
)(Header);
