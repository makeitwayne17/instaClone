import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      userPic: '',
      userPostPic: '',
      postDescription: '',
      comments: '',
      isLiked: false
    };
  }
  render() {
    let postData = this.props.post;
    // extract variables from state
    const {
      userName,
      userPic,
      userPostPic,
      postDescription,
      comments,
      isLiked
    } = this.state;

    return (
      <div
        style={{
          color: 'blue',
          backgroundColor: 'blue',
          top: '156px',
          left: '100px',
          height: '500px',
          width: '700px',
          zIndex: 1
        }}
      >
        {/* This will be the top of the post */}
        <div
          style={{
            color: 'red',
            height: '100px',
            width: '100px',
            top: 0,
            zIndex: 2
          }}
        >
          <img alt="" src={userPic} className="postProfileImg" />
          <div className="postProfileName">
            <p>{userName}</p>
          </div>
        </div>

        {/* This will be the image of the post */}
        <div className="postPicture"></div>

        {/* This will be the comment section */}
        <div className="postComments"></div>
      </div>
    );
  }
}

export default Post;
