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
      likeCount: 0,
      isLiked: false
    };
    this.likeClicked = this.likeClicked.bind(this);
  }
  likeClicked() {
    this.setState(state => ({
      isLiked: !state.isLiked
    }));
    this.setState(state => ({
      likeCount:
        this.state.isLiked === false
          ? this.state.likeCount + 1
          : this.state.likeCount - 1
    }));
    console.log(this.state.likeCount);
  }
  render() {
    let post = this.props.post;
    // extract variables from state
    const {
      userName,
      userPic,
      userPostPic,
      postDescription,
      comments,
      likeCount,
      isLiked
    } = this.state;
    const buffer = [];
    buffer.push(post.comments[0]);
    buffer.push(post.comments[1]);

    console.log('below is the props');
    console.log(this.props.post);

    return (
      <div className="nonHeaderSection">
        {/* this is just for padding*/}
        <div style={{ height: '40px', minHeight: '20px' }}></div>{' '}
        {/* This will be the post container */}
        <div className="post">
          {/* This will be the top of the post */}
          <div className="postHeader">
            <img alt="" src={post.userPic} className="postProfileImg" />
            <div className="postProfileName">
              <p style={{ fontWeight: 'bold' }}>{post.userName}</p>
            </div>
          </div>

          {/* This will be the image of the post */}
          <div className="postPicture">
            <img alt="" src={post.userPostPic} className="postPictureImg" />
          </div>

          {/* This will be the comment section */}
          <div className="postComment">
            <div className="postCommentButtonsContainer">
              <img
                onClick={this.likeClicked}
                className="likeButton"
                alt=""
                src={isLiked === true ? './likedHeart.png' : './emptyHeart.png'}
              />
              <img className="commentButton" alt="" src="./comment.png" />
              <p className="likeText">
                Liked Count: {post.likeCount + this.state.likeCount}
              </p>
            </div>
            <div className="postCommentText">
              <p>
                Hello: {buffer[buffer.length - 2].user} :{' '}
                {buffer[buffer.length - 2].commentText}
              </p>
              <p>
                Hello: {buffer[buffer.length - 1].user} :{' '}
                {buffer[buffer.length - 1].commentText}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
