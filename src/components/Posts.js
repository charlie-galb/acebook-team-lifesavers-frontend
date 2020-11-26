import { render } from "@testing-library/react";
import React, { Component } from "react";
import PostItem from "./PostItem.js";
import PropTypes from "prop-types";

class Posts extends Component {
  // state = {
  //   posts: [],
  //   comments: [],
  //   likes: [],
  // };
  render() {
    // this.setState({
    //   posts: this.props.posts,
    //   comments: this.props.comments,
    //   likes: this.props.likes,
    // });
    console.log(this.props.posts);
    return this.props.posts.posts.map((post) => <p>{post.message}</p>);
  }
}

Posts.propTypes = {
  posts: PropTypes.object.isRequired,
};

export default Posts;
