import * as whoToFollowTypes from '../constants/WhoToFollow';

const initialState = {
  title: 'Who to follow',
  items: [
    {
      avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu5l578HoA96JAzFQoxdnnvqzfvt2msoJ9lI1BPqwwv2r9bQCXHg&s',
      name: 'sonle123',
      username: '@sonle123',
      tick: false
    },
    {
      avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu5l578HoA96JAzFQoxdnnvqzfvt2msoJ9lI1BPqwwv2r9bQCXHg&s',
      name: 'sonle123',
      username: '@sonle123',
      tick: false
    },
    {
      avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu5l578HoA96JAzFQoxdnnvqzfvt2msoJ9lI1BPqwwv2r9bQCXHg&s',
      name: 'sonle123',
      username: '@sonle123',
      tick: false
    },
    {
      avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu5l578HoA96JAzFQoxdnnvqzfvt2msoJ9lI1BPqwwv2r9bQCXHg&s',
      name: 'sonle123',
      username: '@sonle123',
      tick: false
    },
    {
      avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu5l578HoA96JAzFQoxdnnvqzfvt2msoJ9lI1BPqwwv2r9bQCXHg&s',
      name: 'sonle123',
      username: '@sonle123',
      tick: false
    },
    {
      avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu5l578HoA96JAzFQoxdnnvqzfvt2msoJ9lI1BPqwwv2r9bQCXHg&s',
      name: 'sonle123',
      username: '@sonle123',
      tick: false
    },
    {
      avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu5l578HoA96JAzFQoxdnnvqzfvt2msoJ9lI1BPqwwv2r9bQCXHg&s',
      name: 'sonle123',
      username: '@sonle123',
      tick: false
    },
    {
      avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu5l578HoA96JAzFQoxdnnvqzfvt2msoJ9lI1BPqwwv2r9bQCXHg&s',
      name: 'sonle123',
      username: '@sonle123',
      tick: false
    },
    {
      avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu5l578HoA96JAzFQoxdnnvqzfvt2msoJ9lI1BPqwwv2r9bQCXHg&s',
      name: 'sonle123',
      username: '@sonle123',
      tick: false
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
    default: 
      return state;
  }
};

export default whoToFollow;