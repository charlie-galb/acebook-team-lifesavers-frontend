import { render } from "@testing-library/react";
import React, { Component } from "react";
import PostItem from "./PostItem.js";
import PropTypes from "prop-types";

class Posts extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.posts.posts)

    if (this.props.posts.posts !== undefined){
      return this.props.posts.posts.map((post) => (
        // <table>
        // <tr><td>{post.id}</td><td>{post.message}</td></tr>
        //   </table>
          <PostItem key={post.id} message={post.message}/>
      ))}
    return <div></div>
  }
}

// Posts.propTypes = {
//   posts: PropTypes.object.isRequired,
// };

export default Posts;
