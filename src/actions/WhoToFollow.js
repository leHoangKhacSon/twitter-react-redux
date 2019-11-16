import * as whoToFollowTypes from '../constants/WhoToFollow';

export const fetchDataFollowMore = () => {
  return {
    type: whoToFollowTypes.FETCH_DATA_FOLLOW_MORE
  }
};

export const showCard = item => {
  return {
    type: whoToFollowTypes.SHOW_CARD,
    payload: {
      item
    }
  }
};

export const hideCard = item => {
  return {
    type: whoToFollowTypes.HIDE_CARD,
    payload: {
      item
    }
  }
};

export const onFollow = item => {
  return {
    type: whoToFollowTypes.ON_FOLLOW,
    payload: {
      item
    }
  }
};
