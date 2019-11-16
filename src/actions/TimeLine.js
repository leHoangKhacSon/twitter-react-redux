import * as timeLineTypes from '../constants/TimeLine';

export const fetchDataTimeLine = () => {
  return {
    type: timeLineTypes.FETCH_DATA_TIME_LINE
  }
};

export const fetchDataTimeLineSuccess = data => {
  return {
    type: timeLineTypes.FETCH_DATA_TIME_LINE_SUCCESS,
    payload: {
      data
    }
  }
};

export const fetchDataTimeLineFail = () => {
  return {
    type: timeLineTypes.FETCH_DATA_TIME_LINE_FAIL
  }
};

export const onLikeClick = item => {
  return {
    type: timeLineTypes.ON_LIKE_CLICK,
    payload: {
      item
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