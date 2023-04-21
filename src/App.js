import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

export default class App extends Component {
  words = "ketsar ali";
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <News />
        </div>
      </div>
    );
  }
}
