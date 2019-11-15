import * as whoToFollowTypes from '../constants/WhoToFollow';

const initialState = {
  title: 'Who to follow',
  items: [
    {
      avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu5l578HoA96JAzFQoxdnnvqzfvt2msoJ9lI1BPqwwv2r9bQCXHg&s',
      name: 'sonle123',
      username: '@sonle123',
      tick: false,
      isShowCard: false
    },
    {
      avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu5l578HoA96JAzFQoxdnnvqzfvt2msoJ9lI1BPqwwv2r9bQCXHg&s',
      name: 'sonle123',
      username: '@sonle123',
      tick: false,
      isShowCard: false
    },
    {
      avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu5l578HoA96JAzFQoxdnnvqzfvt2msoJ9lI1BPqwwv2r9bQCXHg&s',
      name: 'sonle123',
      username: '@sonle123',
      tick: false,
      isShowCard: false
    },
    {
      avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu5l578HoA96JAzFQoxdnnvqzfvt2msoJ9lI1BPqwwv2r9bQCXHg&s',
      name: 'sonle123',
      username: '@sonle123',
      tick: false,
      isShowCard: false
    },
    {
      avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu5l578HoA96JAzFQoxdnnvqzfvt2msoJ9lI1BPqwwv2r9bQCXHg&s',
      name: 'sonle123',
      username: '@sonle123',
      tick: false,
      isShowCard: false
    },
    {
      avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu5l578HoA96JAzFQoxdnnvqzfvt2msoJ9lI1BPqwwv2r9bQCXHg&s',
      name: 'sonle123',
      username: '@sonle123',
      tick: false,
      isShowCard: false
    },
    {
      avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu5l578HoA96JAzFQoxdnnvqzfvt2msoJ9lI1BPqwwv2r9bQCXHg&s',
      name: 'sonle123',
      username: '@sonle123',
      tick: false,
      isShowCard: false
    },
    {
      avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu5l578HoA96JAzFQoxdnnvqzfvt2msoJ9lI1BPqwwv2r9bQCXHg&s',
      name: 'sonle123',
      username: '@sonle123',
      tick: false,
      isShowCard: false
    },
    {
      avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu5l578HoA96JAzFQoxdnnvqzfvt2msoJ9lI1BPqwwv2r9bQCXHg&s',
      name: 'sonle123',
      username: '@sonle123',
      tick: false,
      isShowCard: false
    }
  ],
  limit: 3
};

const whoToFollow = (state = initialState, action) => {
  switch(action.type) {
    case whoToFollowTypes.FETCH_DATA_FOLLOW_MORE: {
      return {
        ...state,
        limit: state.limit + 3
      }
    }
    case whoToFollowTypes.SHOW_INFO_CARD: {
      const { item } = action.payload;
      const indexShow = state.items.indexOf(item);
      return {
        ...state,
        items: [
          ...state.items.slice(0, indexShow),
          {
            ...item,
            isShowCard: true
          },
          ...state.items.slice(indexShow + 1)
        ]
      }
    }
    case whoToFollowTypes.HIDE_INFO_CARD: {
      const { item } = action.payload;
      const indexHide = state.items.indexOf(item);
      return {
        ...state,
        items: [
          ...state.items.slice(0, indexHide),
          {
            ...item,
            isShowCard: false
          },
          ...state.items.slice(indexHide + 1)
        ]
      }
    }
    default: 
      return state;
  }
};

export default whoToFollow;