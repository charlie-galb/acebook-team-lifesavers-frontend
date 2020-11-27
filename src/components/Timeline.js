import React, { Component } from "react";
import LogoutButton from "./LogoutButton.js";
import Posts from "./Posts.js";
import logo from "../acebook-header.png";
import NewPost from "./NewPost.js";

export class Timeline extends Component {
  constructor(props) {
    super(props);
    this.backToHome = this.backToHome.bind(this);
    //this.handleLogout = this.props.handleLogout.bind(this);
  }

  backToHome() {
    this.props.history.push("/");
  }

  render() {
    console.log(this.props.user.id)
    return (
      <div>
        <nav class="navbar navbar-expand-md navbar-light bg-light flex-column flex-md-row">
          <button
            class="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand" href="#">
            <img
              src={logo}
              width="12%"
              height="12%"
              class="d-inline-block align-top"
              class="float-left"
              alt=""
            />
          </a>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              {/* <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li> */}
              <li class="nav-item log-out-button">
                <LogoutButton
                  handleLogout={this.props.handleLogout}
                  backToHome={this.backToHome}
                  Authorization={this.props.Authorization}
                />
              </li>
            </ul>
          </div>
        </nav>
        <div>
          <NewPost
            updatePosts={this.props.updatePosts}
            Authorization={this.props.Authorization}
            handlePosts={this.props.handlePosts}
            user={this.props.user}
          />
        </div>
        {/* DIV FOR POSTS GOES HERE */}
        <div>
          <Posts
            posts={this.props.posts}
            Authorization={this.props.Authorization}
            handlePosts={this.props.handlePosts}
          />
        </div>
      </div>
    );
  }
}

export default Timeline;
