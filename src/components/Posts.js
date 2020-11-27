import { render } from "@testing-library/react";
import React, { Component } from "react";
import PostItem from "./PostItem.js";
import PropTypes from "prop-types";
import LikeItem from "./LikeItem.js";

class Posts extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    console.log(this.props.posts.posts)
    if (this.props.posts.posts !== undefined){
      return this.props.posts.posts.map((post, i) => (
        <div class='posts'>
          <div class='post'>
            <div class='message'>
              {post.message}
              <button class='diamond-shape' id='like-button'><div class="item-count">{post.likes.length}</div></button>
              <div class='comments'>
                {post.comments.map((comment) => <div class='comment'>{comment.comment_text}</div>)}
              </div>
            </div>
          </div>
        </div>
        
      ))}
    return <div></div>
  }

}


// Posts.propTypes = {
//   posts: PropTypes.object.isRequired,
// };

export default Posts;

// render() {
//   console.log(this.props.posts.posts)
//   if (this.props.posts.posts !== undefined){
//     return this.props.posts.posts.map((post, i) => (
//        <table>
//        <tr><td>{i}</td><td>{post.message}</td></tr>
//        <tr><td>{post.id}</td><td>{post.comments[0].comment_text}</td></tr>
//        <tr><td>{post.id}</td><td>{post.likes.length}</td></tr>
//         </table>
      
//     ))}
//   return <div></div>
// }