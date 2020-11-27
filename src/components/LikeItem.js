import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class LikeItem extends Component {
  render() {
    return <p>{this.props.likes}</p>
    }
}



export default LikeItem;
