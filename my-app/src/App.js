import React from 'react';
import './App.css';
import TopHeader from './compoents/TopHeader';
import Post from './compoents/Post';
import Comment from './compoents/Comment';

import posts from './data.js';

function App() {
  localStorage.setItem('postLiked1', posts[0].isLiked);
  localStorage.setItem('postLiked2', posts[1].isLiked);
  if (localStorage.getItem('defaultPage') === null) {
    localStorage.setItem('defaultPage', true);
  }

  if (localStorage.getItem('currentComments1') === null) {
    localStorage.setItem('currentComments1', JSON.stringify(posts[0].comments));
  }

  if (localStorage.getItem('currentComments2') === null) {
    localStorage.setItem('currentComments2', JSON.stringify(posts[1].comments));
  }
  console.log(JSON.stringify(posts[0].comments));
  console.log(JSON.stringify(posts[1].comments));

  var post = (
    <div className="container">
      {/* render the header of the file */}
      <TopHeader />
      {/* render the post section of the page */}

      <Post post={posts[0]} />
      <Post post={posts[1]} />
    </div>
  );

  var comment = (
    <div className="container">
      {/* render the header of the file */}
      <TopHeader />
      {/* render the post section of the page */}
      <Comment
        post={posts[parseInt(localStorage.getItem('defaultPage')) - 1]}
      />
    </div>
  );
  console.log('Default ' + parseInt(localStorage.getItem('defaultPage')));
  return localStorage.getItem('defaultPage') === 'true' ? post : comment;
}

export default App;
