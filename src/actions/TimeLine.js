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