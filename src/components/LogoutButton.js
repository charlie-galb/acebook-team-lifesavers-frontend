import React, { Component } from 'react'
import Text from 'react';
import axios from 'axios';

export class LogoutButton extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.props.handleLogout.bind(this);
  }

  async handleLogoutClick() {
    try {
      const response = await axios.post(
        "https://acebook-team-life-savers.herokuapp.com/log_out",
        {
          params: {},
        },
        {
          headers: {
            Authorization: this.props.Authorization,
          },
        }
      );
      if (response.data.status === "Logged out!") {
        this.props.backToHome();
      }
    } catch (error) {
      console.log("logout error:", error);
    }
  }

  render() {
    return (
      <div>
        <button class='log-out-button' onClick={() => this.handleLogoutClick()}> Log Out</button> 
      </div>
    )
  }
}

export default LogoutButton
