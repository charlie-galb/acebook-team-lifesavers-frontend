import React, { Component } from "react";
import LogoutButton from "./LogoutButton.js";
import Posts from "./Posts.js"

export class Timeline extends Component {
  constructor(props) {
    super(props);
    this.backToHome = this.backToHome.bind(this);
    //this.handleLogout = this.props.handleLogout.bind(this);
  }

  backToHome(){
    this.props.history.push("/");
  }

    render() {
      return (
        <div>
          <LogoutButton handleLogout={this.props.handleLogout} backToHome={this.backToHome} Authorization={this.props.Authorization} />
          <Posts posts={this.props.posts} Authorization={this.props.Authorization} />
        </div>
      );
    }
};

export default Timeline;
