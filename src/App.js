import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 6;
  state = {
    progress: 0,
    apiKey: process.env.NEWS_API_KEY,
  };
  setProgress = (progress) => {
    this.setState({ progress });
    console.log(this.state.progress);
  };
  render() {
    return (
      <Router>
        <div>
          <LoadingBar color="#f11946" progress={this.state.progress} />
          <NavBar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  apiKey={this.state.apiKey}
                  setProgress={this.setProgress}
                  key="gen"
                  pageSize={this.pageSize}
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/general"
              element={
                <News
                  apiKey={this.state.apiKey}
                  setProgress={this.setProgress}
                  key="general"
                  pageSize={this.pageSize}
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  apiKey={this.state.apiKey}
                  setProgress={this.setProgress}
                  key="entertainment"
                  pageSize={this.pageSize}
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  apiKey={this.state.apiKey}
                  setProgress={this.setProgress}
                  key="sports"
                  pageSize={this.pageSize}
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  apiKey={this.state.apiKey}
                  setProgress={this.setProgress}
                  key="science"
                  pageSize={this.pageSize}
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  apiKey={this.state.apiKey}
                  setProgress={this.setProgress}
                  key="business"
                  pageSize={this.pageSize}
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  apiKey={this.state.apiKey}
                  setProgress={this.setProgress}
                  key="health"
                  pageSize={this.pageSize}
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  apiKey={this.state.apiKey}
                  setProgress={this.setProgress}
                  key="technology"
                  pageSize={this.pageSize}
                  category="technology"
                />
              }
            />
          </Routes>
        </div>
      </Router>
    );
  }
}
