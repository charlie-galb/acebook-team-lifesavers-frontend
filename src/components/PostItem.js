import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class PostItem extends Component {
  render() {
    return this.props.posts.posts.map((post) => (
      // <table>
      // <tr><td>{post.id}</td><td>{post.message}</td></tr>
      //   </table>
        <PostItem post={post}/>
    ))}
    return (

    )
  }
}

PostItem.propTypes = {
  post: PropTypes.object.isRequired
}

export default PostItem;
