import React, { Component } from "react";
import LogoutButton from "./LogoutButton.js";
import Posts from "./Posts.js"

export class Timeline extends Component {
  constructor(props) {
    super(props);
    //this.handleLogout = this.props.handleLogout.bind(this);
  }

    render() {
      return (
        <div>
          <LogoutButton handleLogout={this.props.handleLogout} Authorization={this.props.Authorization} />
          <Posts posts={this.props.posts} Authorization={this.props.Authorization} />
        </div>
      );
    }
};

export default Timeline;
