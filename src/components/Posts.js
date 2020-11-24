import { render } from '@testing-library/react';
import React, { Component } from 'react';
import PostItem from './Postitem.js';
import PropTypes from 'prop-types';

class Posts extends Component {
    render() {
      return this.props.posts.map((post) => (
      < PostItem key={post.id} post={post} />
      ));
    }
}


Posts.propTypes = {
  posts: PropTypes.array.isRequired
}

export default Posts;
