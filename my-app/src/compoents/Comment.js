import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentText: '',
      isLiked: false
    };
  }
  render() {
    //extract variables from state
    const { commentText, isLiked } = this.state;

    return <div></div>;
  }
}

export default Comment;
