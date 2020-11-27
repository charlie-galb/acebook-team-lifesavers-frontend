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
        <nav className="navbar navbar-expand-md navbar-light bg-light flex-column flex-md-row">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              width="12%"
              height="12%"
              className="d-inline-block align-top"
              className="float-left"
              alt=""
            />
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item log-out-button">
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
          <div>
            <Posts posts={this.props.posts} Authorization={this.props.Authorization} />
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
