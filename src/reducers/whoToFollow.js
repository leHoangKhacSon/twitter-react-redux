import * as whoToFollowTypes from '../constants/WhoToFollow';

const initialState = {
  title: 'Who to follow',
  items: [],
  limit: 3
};

const whoToFollow = (state = initialState, action) => {
  switch(action.type) {
    case whoToFollowTypes.FETCH_DATA_FOLLOW: {
      return {
        ...state
      };
    }
    case whoToFollowTypes.FETCH_DATA_FOLLOW_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        items: [
          ...state.items,
          ...data
        ]
      };
    };
    case whoToFollowTypes.FETCH_DATA_FOLLOW_FAIL:
      return {
        ...state,
        items: []
      };
    case whoToFollowTypes.FETCH_DATA_FOLLOW_MORE: {
      return {
        ...state,
        limit: state.limit + 3
      }
    }
    case whoToFollowTypes.SHOW_CARD: {
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
    case whoToFollowTypes.HIDE_CARD: {
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
    case whoToFollowTypes.ON_FOLLOW: {
      const { item } = action.payload;
      const index = state.items.indexOf(item);
      return {
        ...state,
        items: [
          ...state.items.slice(0, index), {
            ...item,
            isFollow: !item.isFollow
          },
          ...state.items.slice(index + 1)
        ]
      }
    }
    case whoToFollowTypes.ON_HOVER_UNFOLLOW: {
      const { item } = action.payload;
      const index = state.items.indexOf(item);
      return {
        ...state,
        items: [
          ...state.items.slice(0, index), {
            ...item,
            isUnfollow: !item.isUnfollow
          },
          ...state.items.slice(index + 1)
        ]
      }
    }
    default: 
      return state;
  }
};

export default whoToFollow;