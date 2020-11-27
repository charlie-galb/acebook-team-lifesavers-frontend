import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class PostItem extends Component {
  render() {
    return <p>{this.props.message}</p>
    
    }
}


PostItem.propTypes = {
  post: PropTypes.object.isRequired
}

export default PostItem;
