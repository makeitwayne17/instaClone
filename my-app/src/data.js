const posts = [
  {
    id: 1,
    userName: 'tofuMaster',
    userPic: './face.png',
    userPostPic: './postPic.png',
    postDescription: 'the grind dont stop',
    isLiked: false,
    likeCount: 7,
    comments: [
      {
        user: 'Steven',
        commentText: 'Nice pic!',
        liked: true,
        id: 1
      },
      {
        user: 'Johnny',
        commentText: 'I am a doctor!',
        liked: false,
        id: 2
      }
    ]
  },
  {
    id: 2,
    userName: 'johnsmith',
    userPic: './face2.png',
    userPostPic: './postPic2.jpg',
    postDescription: 'night',
    isLiked: true,
    likeCount: 4,
    comments: [
      {
        user: 'David',
        commentText: 'beautiful',
        liked: false,
        id: 1
      },
      {
        user: 'Kevin',
        commentText: 'Amazing',
        liked: false,
        id: 2
      }
    ]
  }
];
export default posts;
