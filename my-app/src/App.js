import React from 'react';
import './App.css';
import TopHeader from './compoents/TopHeader';
import Post from './compoents/Post';

import posts from './data.js';

function App() {
  return (
    <div className="container">
      {/* render the header of the file */}
      <TopHeader />
      {/* render the post section of the page */}

      <Post post={posts[0]} />
      {/* <Post /> */}
    </div>
  );
}

export default App;
