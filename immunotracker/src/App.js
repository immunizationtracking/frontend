import React, { Component } from "react";
import "./App.css";
import Header from "./header/header";
import Footer from "./footer/footer";
import { Route, withRouter } from "react-router-dom";
import Login from "./components/login";
import RegisterPage from "./components/registerpage";
import cardview from "./components/Cards/CardsList";
import PrivateRoute from "./utils/PrivateRoute";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="wrapper">
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={RegisterPage} />
          <PrivateRoute exact path="/users" component={cardview} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
