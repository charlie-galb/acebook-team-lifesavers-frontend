import "./App.css";
import React, { Component } from "react";
import Posts from "./components/Posts.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
import Home from "./components/Home.js";
import Dashboard from "./components/Dashboard.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {},
      posts: []
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  async checkLoginStatus() {
    const response = await axios.get(
      "https://acebook-team-life-savers.herokuapp.com/logged_in",
      { withCredentials: true }
    );
    try {
      if (
        response.data.logged_in &&
        this.state.loggedInStatus === "NOT_LOGGED_IN"
      ) {
        this.setState({
          loggedInStatus: "LOGGED_IN",
          user: response.data.user,
        });
      } else if (
        !response.data.logged_in &&
        this.state.loggedInStatus === "LOGGED_IN"
      ) {
        this.setState({
          loggedInStatus: "NOT_LOGGED_IN",
          user: {},
        });
      }
    } catch (error) {
      console.log("check login error", error);
    }
  }

  componentDidMount() {
    this.checkLoginStatus();
    axios.get(
      "https://acebook-team-life-savers.herokuapp.com/posts"
      )
      .then(
        response => this.handlePosts(response.data),
        )
      // if (response.data === true) {
      //   this.setState({posts: response.data}),
      //   console.log(response.data),
      // }
  }

  handlePosts(postObjectHash) {
    this.setState({
      posts: postObjectHash
    })
    console.log(postObjectHash)
    console.log(this.state)
  }

  handleLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {},
    });
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
                  handleLogout={this.handleLogout}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />
            <Route
              exact
              path={"/posts"}
              render={(props) => (
                <Dashboard
                  {...props}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
