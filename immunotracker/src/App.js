import React, { Component } from "react";
import "./App.css";
import Header from "./header/header";
import Footer from "./footer/footer";
import { Route } from "react-router-dom";
import login from "./components/login";
import Regi from "./components/registerpage";
import cardview from "./components/Cards/CardsList";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="wrapper">
          <Route exact path="/" component={login} />
          <Route exact path="/register" component={Regi} />
          <Route exact path="/users" component={cardview} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
