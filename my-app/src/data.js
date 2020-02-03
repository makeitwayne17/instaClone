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
        commentText: 'Nice pic!'
      },
      {
        user: 'Johnny',
        commentText: 'I am a doctor!'
      }
    ]
  },
  {
    id: 2,
    userName: 'kobebryant',
    userPic: '',
    userPostPic: '',
    postDescription: 'rest in peace',
    isLiked: true,
    likeCount: 7,
    comments: [
      {
        user: 'David',
        commentText: 'RIP'
      },
      {
        user: 'Kevin',
        commentText: 'Mamba Out :('
      }
    ]
  }
];
export default posts;
