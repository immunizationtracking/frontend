import React, { Component } from "react";
import "./App.css";
import Header from "./header/header";
import Footer from "./footer/footer";
import { Route, withRouter, Switch } from "react-router-dom";
import Login from "./components/login";
import RegisterPage from "./components/registerpage";
import cardview from "./components/Cards/CardsList";
import PrivateRoute from "./utils/PrivateRoute";
import Maxcard from "./components/Cards/maxcard";
class App extends Component {
	render() {
		return (
			<div className='App'>
				<Header />
				<div className='wrapper'>
					<Switch>
						<PrivateRoute path='/users' component={cardview} />
						<Route path='/register' component={RegisterPage} />
						<Route path='/' component={Login} />
					</Switch>
				</div>
				<Footer />
			</div>
		);
	}
}

export default withRouter(App);
