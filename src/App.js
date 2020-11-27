import "./App.css";
import React, { Component } from "react";
import Posts from "./components/Posts.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
import Home from "./components/Home.js";
import { useHistory } from "react-router-dom";
import Timeline from "./components/Timeline.js";


class App extends Component {

  constructor() {
    super();
    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {},
      posts: [],
      Authorization: "",
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  async checkLoginStatus() {
    try {
      const response = await axios.get(
        "https://acebook-team-life-savers.herokuapp.com/logged_in",
      );
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

  async componentDidMount() {
    // this.checkLoginStatus();
    // await axios
    //   .get("https://acebook-team-life-savers.herokuapp.com/posts",
    //   // {
    //   //   params: {},
    //   // },
    //   {
    //     headers: {
    //       Authorization: this.state.Authorization,
    //     },
    //   }
    //   )
    //   .then((response) => this.handlePosts(response.data))
    //   .catch((error) => console.log(error))
  }

  handlePosts(postObjectArray) {
    console.log(postObjectArray)
    this.setState({
      posts: postObjectArray,
    });
    console.log(this.state);
  }

  handleLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {},
      Authorization: "",
    })
    
    
  }

  async handleLogin(data) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user,
      Authorization: data.auth_token,
    });
      await axios
      .get("https://acebook-team-life-savers.herokuapp.com/posts",
      // {
      //   params: {},
      // },
      {
        headers: {
          Authorization: this.state.Authorization,
        },
      }
      )
      .then((response) => this.handlePosts(response.data))
      .catch((error) => console.log(error))
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
                  Authorization={this.state.Authorization}
                  handleLogin={this.handleLogin}
                  handleLogout={this.handleLogout}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />
            <Route
              path={"/timeline"}
              render={(props) => (
                <Timeline
                {...props}
                handleLogout={this.handleLogout}
                posts={this.state.posts}
                Authorization={this.state.Authorization}
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
