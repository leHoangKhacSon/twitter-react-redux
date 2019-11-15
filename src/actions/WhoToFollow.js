import * as whoToFollowTypes from '../constants/WhoToFollow';

export const fetchDataFollowMore = () => {
  return {
    type: whoToFollowTypes.FETCH_DATA_FOLLOW_MORE
  }
};

export const showInfoCard = item => {
  return {
    type: whoToFollowTypes.SHOW_INFO_CARD,
    payload: {
      item
    }
  }
};

export const hideInfoCard = item => {
  return {
    type: whoToFollowTypes.HIDE_INFO_CARD,
    payload: {
      item
    }
  }
};