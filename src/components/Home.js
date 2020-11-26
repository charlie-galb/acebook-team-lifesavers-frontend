import React, { Component } from "react";
import { Login } from "./auth/Login";
import Registration from "./auth/Registration";
import axios from "axios";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.handleSuccesfulAuth = this.handleSuccesfulAuth.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }
  handleSuccesfulAuth(data) {
    this.props.handleLogin(data);
    this.props.history.push("/posts");
  }
  async handleLogoutClick() {
    try {
      const response = await axios.post(
        "https://acebook-team-life-savers.herokuapp.com/log_out",
        { withCredentials: true }
      );
      if (response.data.status === "Logged out!") {
        this.props.handleLogout();
      }
    } catch (error) {
      console.log("logout error:", error);
    }
  }
  render() {
    return (
      <div>
        <h1>Home</h1>
        <h1>Status: {this.props.loggedInStatus}</h1>
        <button onClick={() => this.handleLogoutClick()}> Logout </button>
        <Registration handleSuccesfulAuth={this.handleSuccesfulAuth} />
        <Login handleSuccesfulAuth={this.handleSuccesfulAuth} />
      </div>
    );
  }
}

export default Home;
