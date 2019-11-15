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
    isLike: false,
    infoCardShow: false,
    optionShow: false
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
    isLike: false,
    infoCardShow: false,
    optionShow: false
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
    isLike: false,
    infoCardShow: false,
    optionShow: false
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
    isLike: false,
    infoCardShow: false,
    optionShow: false
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
    isLike: false,
    infoCardShow: false,
    optionShow: false
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
    isLike: false,
    infoCardShow: false,
    optionShow: false
  }
];

const fetchIndex = (item, state) => {
  return state.indexOf(item)
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
    case timeLineTypes.SHOW_INFO_CARD: {
      const { item } = action.payload;
      const indexShow = state.indexOf(item);
      // const indexShow = fetchIndex(item, state);
      console.log(state);
      return [
        ...state.slice(0, indexShow),
        {
          ...item,
          infoCardShow: true
        },
        ...state.slice(indexShow + 1)
      ]
    }
    case timeLineTypes.HIDE_INFO_CARD: {
      const { item } = action.payload;
      const indexHide = fetchIndex(item, state);
      return [
        ...state.slice(0, indexHide),
        {
          ...item,
          infoCardShow: false
        },
        ...state.slice(indexHide + 1)
      ]
    }
    default:
      return state;
  }
}

export default timeLine;