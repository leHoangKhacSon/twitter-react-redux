import * as timeLineTypes from '../constants/TimeLine';

const inititalState = [
  {
    idPost: 1,
    avatarUrl: 'dadas',
    isTick: true,
    name: 'name123',
    username: '@name123',
    time: '09: 00 AM',
    contentText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    contentImg: 'dasdasdasd',
    comment: 222,
    reTweet: 111,
    like: 600,
    isLike: false
  },
  {
    idPost: 2,
    avatarUrl: 'dadas',
    isTick: true,
    name: 'name123',
    username: '@name123',
    time: '09: 00 AM',
    contentText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    contentImg: 'dasdasdasd',
    comment: 222,
    reTweet: 111,
    like: 600,
    isLike: false
  },
  {
    idPost: 3,
    avatarUrl: 'dadas',
    isTick: true,
    name: 'name123',
    username: '@name123',
    time: '09: 00 AM',
    contentText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    contentImg: 'dasdasdasd',
    comment: 222,
    reTweet: 111,
    like: 600,
    isLike: false
  },
  {
    idPost: 4,
    avatarUrl: 'dadas',
    isTick: true,
    name: 'name123',
    username: '@name123',
    time: '09: 00 AM',
    contentText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    contentImg: 'dasdasdasd',
    comment: 222,
    reTweet: 111,
    like: 600,
    isLike: false
  },
  {
    idPost: 5,
    avatarUrl: 'dadas',
    isTick: true,
    name: 'name123',
    username: '@name123',
    time: '09: 00 AM',
    contentText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    contentImg: 'dasdasdasd',
    comment: 222,
    reTweet: 111,
    like: 600,
    isLike: false
  },
  {
    idPost: 6,
    avatarUrl: 'dadas',
    isTick: true,
    name: 'name123',
    username: '@name123',
    time: '09: 00 AM',
    contentText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    contentImg: 'dasdasdasd',
    comment: 222,
    reTweet: 111,
    like: 600,
    isLike: false
  }
];

const fetchIndex = (id, state) => {
  let index;
  for(let i = 0; i < state.length; i++) {
    if(state[i].idPost === id) {
      index = i;
      break;
    }
  return index;
}
}

const timeLine = (state = inititalState, action) => {
  switch (action.type) {
    case timeLineTypes.FETCH_DATA_TIME_LINE: {
      return [
        ...state
      ];
    }
    case timeLineTypes.ON_DISLIKE: {
      const { idPost } = action.payload;
      const indexDisLike = fetchIndex(idPost, state);
      return [
        ...state.slice(0, indexDisLike),
        {
          ...state.indexDisLike,
          isLike: true
        },
        ...state.slice(indexDisLike + 1)
      ];
    }
    case timeLineTypes.ON_LIKE: {
      const { idPost } = action.payload;
      const indexLike = fetchIndex(idPost, state);
      return [
        ...state.slice(0, indexLike),
        {
          ...state.indexLike,
          isLike: true
        },
        ...state.slice(indexLike + 1)
      ]
    }
    default:
      return state;
  }
}

export default timeLine;