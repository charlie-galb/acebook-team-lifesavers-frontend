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
    console.log(this.props.posts);
    return this.props.posts.map((post) => <p>{post.message} {post.likes} {post.comments}</p>);
  }
}

Posts.propTypes = {
  posts: PropTypes.object.isRequired,
};

export default Posts;
