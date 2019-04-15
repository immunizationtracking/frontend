import React, { Component } from "react";
import "./App.css";
import Header from "./header/header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <h1>Holder</h1>
      </div>
    );
  }
}

export default App;
