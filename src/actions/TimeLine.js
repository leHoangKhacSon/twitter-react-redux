import * as timeLineTypes from '../constants/TimeLine';

export const fetchDataTimeLine = () => {
  return {
    type: timeLineTypes.FETCH_DATA_TIME_LINE
  }
};

export const onLike = idPost => {
  return {
    type: timeLineTypes.ON_LIKE,
    payload: {
      idPost
    }
  }
};

export const onDislike = idPost => {
  return {
    type: timeLineTypes.ON_DISLIKE,
    payload: {
      idPost
    }
  }
}; 

export const showInfoCard = item => {
  return {
    type: timeLineTypes.SHOW_INFO_CARD,
    payload: {
      item
    }
  }
};

export const hideInfoCard = item => {
  return {
    type: timeLineTypes.HIDE_INFO_CARD,
    payload: {
      item
    }
  }
};