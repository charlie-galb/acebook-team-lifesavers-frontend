import "./App.css";
import React, { Component } from "react";
import Posts from "./components/Posts.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
import Home from "./components/Home.js";
import Dashboard from "./components/Dashboard.js";

class App extends Component {
  // state = {
  //   posts: [
  //     {
  //       id: 1,
  //       message: "First post",
  //       user_id: 1,
  //       timestamp: "01.01.2020 01:01:01",
  //     },
  //     {
  //       id: 2,
  //       message: "Second post",
  //       user_id: 2,
  //       timestamp: "02.02.2020 02:02:02",
  //     },
  //   ],
  // };

  constructor() {
    super();
    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {},
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user,
    });
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path={"/"}
              render={(props) => (
                <Home
                  {...props}
                  handleLogin={this.handleLogin}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />
            <Route
              exact
              path={"/dashboard"}
              render={(props) => (
                <Dashboard
                  {...props}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />
          </Switch>
        </BrowserRouter>
        {/* <Posts posts={this.state.posts} /> */}
      </div>
    );
  }
}

export default App;
