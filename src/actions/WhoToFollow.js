import * as whoToFollowTypes from '../constants/WhoToFollow';

export const fetchDataFollow = () => {
  return {
    type: whoToFollowTypes.FETCH_DATA_FOLLOW
  }
};

export const fetchDataFollowSuccess = data => {
  return {
    type: whoToFollowTypes.FETCH_DATA_FOLLOW_SUCCESS,
    payload: {
      data
    }
  }
};

export const fetchDataFollowFail = () => {
  return {
    type: whoToFollowTypes.FETCH_DATA_FOLLOW_FAIL
  }
};

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

export const onHoverUnfollow = item => {
  return {
    type: whoToFollowTypes.ON_HOVER_UNFOLLOW,
    payload:{
      item
    }
  }
}
