import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { Route, Routes } from "react-router";

export default class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <NavBar />
          <News pageSize={6} />
        </Routes>
      </div>
    );
  }
}
