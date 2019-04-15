import React, { Component } from "react";
import "./App.css";
import Header from "./header/header";
import Footer from "./footer/footer";
import { Route } from "react-router-dom";
import login from "./components/login";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" component={login} />
        <Footer />
      </div>
    );
  }
}

export default App;
