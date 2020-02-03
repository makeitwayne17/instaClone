import React, { Component } from 'react';

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
      isLiked: false,
      value: '',
      commentName: '',
      comment2: false,
      comment1: false,
      id: 0
    };
    this.likeClicked = this.likeClicked.bind(this);
    this.commentClicked = this.commentClicked.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.commentLiked1 = this.commentLiked1.bind(this);
    this.commentLiked2 = this.commentLiked2.bind(this);
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

  commentLiked1() {
    this.setState(state => ({
      comment1: !state.comment1
    }));

    console.log('comment1' + this.state.comment1);
  }

  commentLiked2() {
    this.setState(state => ({
      comment2: !state.comment2
    }));

    console.log('comment1' + this.state.comment1);
  }

  commentClicked() {
    localStorage.setItem('defaultPage', this.state.id);
    console.log('to comment page');
    window.location.reload(this.state.id);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    console.log('A name was submitted: ' + this.state.value);
    console.log(this.state.commentName);
    var obj = JSON.parse(localStorage.getItem(this.state.commentName));
    obj.push({ user: 'Current User', commentText: this.state.value });
    localStorage.setItem(this.state.commentName, JSON.stringify(obj));
    this.setState({ value: '' });
    //event.preventDefault();
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
      isLiked,
      comment1,
      comment2,
      id
    } = this.state;
    console.log('below is the props');
    console.log(this.props.post);
    this.state.id = post.id;

    this.state.commentName = 'currentComments' + parseInt(post.id);

    console.log(this.state.commentName);
    console.log(
      localStorage.getItem(this.state.commentName) +
        this.state.commentName +
        parseInt(
          JSON.parse(localStorage.getItem(this.state.commentName)).length - 2
        ) +
        JSON.parse(localStorage.getItem(this.state.commentName))[1].user
    );

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
              <img
                onClick={this.commentClicked}
                className="commentButton"
                alt=""
                src="./comment.png"
              />
              <p className="likeText">
                Liked Count: {this.state.likeCount + post.likeCount}
              </p>
            </div>

            <div className="postCommentText">
              <img
                onClick={this.commentLiked1}
                className="commentLikeButton"
                alt=""
                src={
                  comment1 === true ? './likedHeart.png' : './emptyHeart.png'
                }
              />
              <p className="postCommentTextWords">
                <b>
                  {
                    JSON.parse(localStorage.getItem(this.state.commentName))[
                      JSON.parse(localStorage.getItem(this.state.commentName))
                        .length - 2
                    ].user
                  }{' '}
                </b>
                :{' '}
                {
                  JSON.parse(localStorage.getItem(this.state.commentName))[
                    JSON.parse(localStorage.getItem(this.state.commentName))
                      .length - 2
                  ].commentText
                }
              </p>
              <img
                onClick={this.commentLiked2}
                className="commentLikeButton"
                alt=""
                src={
                  comment2 === true ? './likedHeart.png' : './emptyHeart.png'
                }
              />
              <p className="postCommentTextWords">
                <b>
                  {
                    JSON.parse(localStorage.getItem(this.state.commentName))[
                      JSON.parse(localStorage.getItem(this.state.commentName))
                        .length - 1
                    ].user
                  }{' '}
                </b>
                :{' '}
                {
                  JSON.parse(localStorage.getItem(this.state.commentName))[
                    JSON.parse(localStorage.getItem(this.state.commentName))
                      .length - 1
                  ].commentText
                }
              </p>
              <form
                style={{
                  width: '90%',
                  maxWidth: '90%',
                  float: 'left',
                  bottom: '3px'
                }}
                onSubmit={this.handleSubmit}
              >
                <label>
                  <input
                    className="formInput"
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                  />
                </label>
                <input type="submit" value="Post" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
