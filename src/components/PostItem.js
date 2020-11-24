import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class PostItem extends Component {
  render() {
    return (
      <div>
        <p>{ this.props.post.message }</p>
      </div>
    )
  }
}

PostItem.propTypes = {
  post: PropTypes.object.isRequired
}

export default PostItem;
