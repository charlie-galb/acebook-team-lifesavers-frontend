import React, { Component } from "react";
import { Login } from "./auth/Login";
import logo from '../acebook-header.png'
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
      <div className="container-fluid">
      <div className="row no-gutter">
        <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
        <div className="col-md-8 col-lg-6">
          <div className="login d-flex align-items-center py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-9 col-lg-8 mx-auto">
                <div>
                  <img src={logo} alt="acebook logo" className="header-logo"/>
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
