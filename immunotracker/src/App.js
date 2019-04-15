import React, { Component } from "react";
import "./App.css";
import Header from "./header/header";
import Footer from "./footer/footer";
import { Route } from "react-router-dom";
import login from "./components/login";
import Regi from "./components/registerpage";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" component={login} />
        <Route exact path="/register" component={Regi} />
        <Footer />
      </div>
    );
  }
}

export default App;
