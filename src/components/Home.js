import React, { Component } from "react";
import { Login } from "./auth/Login";
import logo from '../acebook-header.png'
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
      <div class="container-fluid">
      <div class="row no-gutter">
        <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
        <div class="col-md-8 col-lg-6">
          <div class="login d-flex align-items-center py-5">
            <div class="container">
              <div class="row">
                <div class="col-md-9 col-lg-8 mx-auto">
                <div>
                  <img src={logo} alt="acebook logo" class="header-logo"/>
		            </div>
                    <div id='sign-up-form'>
                      <Login handleSuccesfulAuth={this.handleSuccesfulAuth} Authorization={this.props.Authorization}/>
                    </div>
                    <div id='sign-up-form'>
                      <Registration handleSuccesfulAuth={this.handleSuccesfulAuth} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
