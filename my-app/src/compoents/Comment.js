import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

class Comment extends Component {
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
      comment1: false,
      comment2: false,
      commentName: ''
    };
    this.likeClicked = this.likeClicked.bind(this);
    this.backClicked = this.backClicked.bind(this);
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

  backClicked() {
    localStorage.setItem('defaultPage', true);
    console.log('to main page');
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

    var obj2 = JSON.parse(localStorage.getItem(this.state.commentName));
    if (obj2.length < 10) {
      this.list = React.createElement(
        'p',
        { classname: 'postCommentTextWords' },
        obj2[3]
      );
    }
    console.log('obj2 length' + obj2.length);
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
      comment1,
      comment2,
      isLiked
    } = this.state;
    console.log('below is the props');
    console.log(this.props.post);

    this.state.commentName = 'currentComments' + parseInt(post.id);

    // function Repeat(props) {
    //   let items = [];
    //   console.log(localStorage.getItem(this.state.commentName));
    //   for (
    //     let i = 2;
    //     i < JSON.parse(localStorage.getItem(this.state.commentName)).length;
    //     i++
    //   ) {
    //     items.push(<p>Helllloooo {i}</p>);
    //   }
    //   return <div>{items}</div>;
    // }

    return (
      <div className="nonHeaderSection">
        {/* this is just for padding*/}
        <div style={{ height: '40px', minHeight: '20px' }}></div>{' '}
        {/* This will be the comment container */}
        <div className="comment">
          {/* This will serve as the picture container */}
          <div className="commentPicture">
            <img alt="" src={post.userPostPic} className="commentPictureImg" />
          </div>

          {/* This will serve as the text container */}
          <div className="textContainer">
            <div className="commentCommentButtonsContainer">
              <img
                onClick={this.backClicked}
                className="commentCommentButton"
                alt=""
                src="./back.png"
              />
              <img
                onClick={this.likeClicked}
                className="likeButtonInCommentPage"
                alt=""
                src={isLiked === true ? './likedHeart.png' : './emptyHeart.png'}
              />
              <p className="likeText">
                Liked Count: {this.state.likeCount + post.likeCount}
              </p>
            </div>
            <div className="commentCommentSection">
              {/* {this.list} */}

              {/* <Repeat numTimes={10}>
                {index => (
                  <div key={index}>This is item {index} in the list</div>
                )}
              </Repeat> */}

              <img
                onClick={this.commentLiked1}
                className="likeButtonInCommentPageSection"
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
                className="likeButtonInCommentPageSection"
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
                  bottom: '3px',
                  left: '5%'
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

            {/* This will be the top of the post */}
            <div className="commentHeader">
              <img alt="" src={post.userPic} className="commentProfileImg" />
              <div className="postProfileName">
                <p style={{ fontWeight: 'bold' }}>{post.userName}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Comment;
