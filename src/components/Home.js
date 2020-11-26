import React, { Component } from "react";
import { Login } from "./auth/Login";
import Registration from "./auth/Registration";
import axios from "axios";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.handleSuccesfulAuth = this.handleSuccesfulAuth.bind(this);
    // this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }
  handleSuccesfulAuth(data) {
    this.props.handleLogin(data);
    this.props.history.push("/timeline");
  }
  
  render() {
    return (
      <div>
        <h1>Home</h1>
        <h1>Status: {this.props.loggedInStatus}</h1>
        {/* <button onClick={() => this.handleLogoutClick()}> Logout </button> */}
        <Registration handleSuccesfulAuth={this.handleSuccesfulAuth} />
        <Login
          handleSuccesfulAuth={this.handleSuccesfulAuth}
          Authorization={this.props.Authorization}
        />
      </div>
    );
  }
}

export default Home;
